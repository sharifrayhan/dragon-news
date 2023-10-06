import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = (value) => {
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    

    
    const [cards, setCards] = useState([])
    const [filteredCards, setFilteredCards] = useState([])
    
    useEffect(() => {
        fetch('news_data.json')
            .then(result => result.json())
            .then(data => {setCards(data); setFilteredCards(data)})
    }, []);

    const handleSearch = (searchCategory) =>{
        const informations= cards.filter((card) =>
    card.category.toLowerCase().includes(searchCategory.toLowerCase())
    
  );
  setFilteredCards(informations)


    }

    const handleShowAllCArds =() =>{
        setFilteredCards(cards)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the on auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleSignIn,
        handleSearch,
        cards,
        filteredCards,
        handleShowAllCArds
      
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
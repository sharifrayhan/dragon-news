import { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Leftbox from './Leftbox';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/context';

const Middlebox = () => {

    
    
    // const [cards, setCards] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const {filteredCards} = useContext(AuthContext)
   
    

    // useEffect(() => {
    //     fetch('news_data.json')
    //         .then(result => result.json())
    //         .then(data => setCards(data))
    // }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    

    

    return (
        <div>
            
            {filteredCards.map((card, index) => (
                (showAll || index < 3) && <Card key={card.id} card={card}></Card>
            ))}
            {filteredCards.length > 3 && !showAll && (
                <center>
                    <button onClick={toggleShowAll} className="bg-blue-500 text-white p-2 mt-4">
                    Show All Cards
                </button>
                </center>
            )}
        </div>
    );
};

export default Middlebox;

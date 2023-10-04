import { useEffect, useState } from 'react';
import Card from './Card';

const Middlebox = () => {
    const [cards, setCards] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('news_data.json')
            .then(result => result.json())
            .then(data => setCards(data))
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            {cards.map((card, index) => (
                (showAll || index < 3) && <Card key={card.id} card={card}></Card>
            ))}
            {cards.length > 3 && !showAll && (
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

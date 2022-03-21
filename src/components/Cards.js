import React from 'react';
import Card from '../components/Card';
import Data from '../data/Database'

function Cards() {

    // Render a card for each item in the data array

    const cards = Data.map(item => {
        return(
            <Card
                title={item.title}
            />
        )
    })

    return(<>
        <main>
            <div className="card-container">
                {cards}
            </div>
        </main>
    </>)
}

export default Cards;
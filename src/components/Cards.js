import React from 'react';
import Card from '../components/Card';

function Cards() {

    const data = [{id: 1, title: 'Item one' }, {id: 2, title: 'Item two'}, {id: 3, title: 'Item three'}, {id: 4, title: 'Item four'}];

    // Render a card for each item in the data array

    const cards = data.map(item => {
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
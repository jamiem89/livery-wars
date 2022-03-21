import React from 'react';

function Card(props) {

    const [upvotes, setUpvotes] = React.useState(0);
    const [downvotes, setDownvotes] = React.useState(0);
    let calculatedWidth = (upvotes / (upvotes + downvotes) * 100);
    let totalPer = Math.floor((upvotes / (upvotes + downvotes) * 100));

    function handleVotes(e) {
        if(e.target.classList.contains('card__button-upvote')) {
            setUpvotes(prevUpvotes => prevUpvotes + 1);
        } else {
            setDownvotes(prevDownvotes => prevDownvotes + 1);
        }
    }

    return(
        <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <button className="card__button card__button-upvote" onClick={handleVotes}>Upvote ({upvotes})</button>
        <button className="card__button card__button-downvote" onClick={handleVotes}>Downvote ({downvotes})</button>
            <span className="card__total">Total = {totalPer ? totalPer : `Please vote first` }</span>
            <span className="card__bar">
                <span className="card__bar-progress" style={{width: `${calculatedWidth}%`}}></span>
                </span>
        </div>
    )
}

export default Card;
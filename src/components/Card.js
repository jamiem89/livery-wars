import React from 'react';

function Card(props) {

    const [upvotes, setUpvotes] = React.useState(0);
    const [downvotes, setDownvotes] = React.useState(0);
    const [totalVotes, setTotalVotes] = React.useState(0);

    function handleVotes(e) {
        if(e.target.classList.contains('card__button-upvote')) {
            setUpvotes(prevUpvotes => prevUpvotes + 1);
            setTotalVotes(prevVotes => prevVotes + 1);
        } else {
            setDownvotes(prevDownvotes => prevDownvotes + 1);
            setTotalVotes(prevDownvotes => prevDownvotes - 1);
        }
    }

    return(
        <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <button className="card__button card__button-upvote" onClick={handleVotes}>Upvote ({upvotes})</button>
        <button className="card__button card__button-downvote" onClick={handleVotes}>Downvote ({downvotes})</button>
            <span className="card__total">Total = {Math.floor((upvotes / (upvotes + downvotes) * 100))}</span>
            <span className="card__bar"><span className="card__bar-progress" style={{width: `${(upvotes / (upvotes + downvotes) * 100)}%`}}></span></span>
        </div>
    )
}

export default Card;
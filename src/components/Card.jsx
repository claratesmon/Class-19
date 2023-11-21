/* eslint-disable react/prop-types */
import './card.css'

function Card({username, age, imageurl}){
    //const {username, age, imageurl} = props;
    console.log(username);
    return(
        <div className="card-container">
            <h3>{username}</h3>
            <p>{age} years old</p>
            <img src={imageurl} alt="avatar" />
        </div>
    )
}

export default Card;
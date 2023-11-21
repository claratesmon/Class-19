/* eslint-disable react/prop-types */
import './card.css'

function CardMarc(props) {
    const { username, age, imageurl } = props.user;

    return (
        <div className="card-container">
            <h3>{username}</h3>
            <p>{age} years old</p>
            <img src={imageurl} alt="avatar" />
        </div>
    )
}

export default CardMarc;
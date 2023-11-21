/* eslint-disable react/prop-types */
import './card.css'
import { useState } from 'react';

function Card() {
    const [username, setUsername] = useState("Michael Scott");
    const [imageUrl, setImageUrl] = useState("https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg");
    console.log("CARD is mounted");

    const changeDetails = () => {
        if(username !== "Dwight"){
            setUsername("Dwight")
            setImageUrl("https://i.blogs.es/662d1e/dwight-office/1366_2000.jpeg")
        }else{
            setUsername("Michael Scott")
            setImageUrl("https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg")
        }
    };

    return (
        <div className="card-container">
            <h1>{username}</h1>
            <p>This is the world{"'"}s best boss</p>
            <img className='avatar' src={imageUrl} alt="avatar" />
            <button onClick={changeDetails}>Change the name</button>
            <input onChange={(event)=>setUsername(event.target.value)} type="text" />
        </div>
    )
}

export default Card;

// https://i.blogs.es/662d1e/dwight-office/1366_2000.jpeg
/* eslint-disable react/prop-types */
import './card.css'
import { useState } from 'react';

function Card(){
    const [username, setUsername] = useState("Michael Scott");
  
    return(
        <div className="card-container">
            <h1>{username}</h1>
            <p>This is the world{"'"}s best boss</p>
            <img className='avatar' src="https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg" alt="avatar" />
            <button onClick={()=> setUsername("Prision Mike")}>Change the name</button>
        </div>
    )
}

export default Card;

// https://i.blogs.es/662d1e/dwight-office/1366_2000.jpeg
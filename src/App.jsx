/* eslint-disable react/prop-types */
import './App.css'
import { useState } from 'react'; // Usestate is a react HOOK


const App = () => { // This is also a functional component
  const [count, setCount] = useState(0); // this is how we define a state in react
  console.log("This component is mounted");


  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default App

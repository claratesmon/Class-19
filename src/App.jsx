/* eslint-disable react/prop-types */
import './App.css'
import Card from './components/Card'


const App = () => { // This is also a functional component
  console.log("APP is mounted");
  const arrayOfLi = ["Rick", "Morty", "Sam"]

  return (
    <>
      <ul>
        {arrayOfLi.map((dittoName, dittoIndex) => {
          return (
            <li key={dittoIndex}>
              <h1>{dittoName}</h1>
              <p >{dittoName}</p>
            </li>
          )
        })}
      </ul>
      {/* <Card /> */}
    </>
  )
}

export default App

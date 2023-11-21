/* eslint-disable react/prop-types */
import './App.css'
import MovieList2 from './components/MoviesList2';


const App = () => { // This is also a functional component
  console.log("APP is mounted");

  return (
    <>
      <MovieList2 />
    </>
  )
}

export default App

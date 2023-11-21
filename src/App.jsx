/* eslint-disable react/prop-types */
import './App.css'
import Card from './components/Card'
import CardMarc from './components/CardMarc'

function App() {
  const arrayOfData = [
    {
      username: 'John',
      age: 22,
      imageurl: 'https://gravatar.com/avatar/c7ab8268266e0c2c643da16a5694fdc2?s=400&d=robohash&r=x',
      description: "This is a robot"
    },
    {
      username: 'Peter',
      age: 34,
      imageurl: 'https://gravatar.com/avatar/1b8cb7de334ee75ab42886fe94f68fe3?s=400&d=robohash&r=x'
    },
    {
      username: 'Alfred',
      age: 45,
      imageurl: 'https://gravatar.com/avatar/05061bf3dcbb1153b35115b7fcacf406?s=400&d=robohash&r=x'
    },
  ]

  return (
    <>
      <h1>Robots</h1>
      <CardMarc user={arrayOfData[0]} />
      <CardMarc user={arrayOfData[1]} />
      <CardMarc user={arrayOfData[2]} />
      <Card username={arrayOfData[0].username} age={arrayOfData[0].age} imageurl={arrayOfData[0].imageurl}/>
      <Card username={arrayOfData[1].username} age={arrayOfData[1].age} imageurl={arrayOfData[1].imageurl}/>
      <Card username={arrayOfData[2].username} age={arrayOfData[2].age} imageurl={arrayOfData[2].imageurl}/>
    </>
  )
}

export default App

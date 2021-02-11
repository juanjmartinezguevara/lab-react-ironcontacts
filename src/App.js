import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  let localContacts = [...contacts]
  const [stateCelebs, setStateCelebs] = useState(localContacts.splice(0, 5))
  const [otherCelebs, setOtherCelebs] = useState(localContacts)
  const ShowFive = () => {
    return stateCelebs.map((eachContact, i) => {
      return <li key={i}><img src={eachContact.pictureUrl} /> {eachContact.name} {eachContact.popularity}</li>
    })
  }

  const addRandom = () => {
    if (otherCelebs.length <= 0) {
    return
  }

    let randomN = Math.floor(Math.random() * otherCelebs.length)
    let tempCelebs = [...stateCelebs]
    let tempAllCelebs = [...otherCelebs]
    tempCelebs.unshift(tempAllCelebs[randomN])
    tempAllCelebs.splice(randomN, 1)
    setStateCelebs(tempCelebs)
    setOtherCelebs(tempAllCelebs)
  }
  

  const sortByName = () => {
    console.log('whatever')
  }

  const sortByPopularity = () => {
    console.log('whatever2')
  }

  return (
    <div>Hello
      <button onClick={addRandom}>Add Random Actor</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <ShowFive/>
    </div>
  )
}

export default App;

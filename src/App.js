import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {


  let localContacts = [...contacts]
  const [stateCelebs, setStateCelebs] = useState(localContacts.splice(0, 5))
  const [otherCelebs, setOtherCelebs] = useState(localContacts)
  
  const ShowFive = () => {
    return stateCelebs.map((eachContact, i) => {
      return (
      <tr>
        <td key={i}><img id='image' src={eachContact.pictureUrl}/></td>
        <td>{eachContact.name}</td>
        <td>{eachContact.popularity}</td>
        <td><button class="action-btn" onClick={() => deleteContact(i)}>Delete</button></td>
      </tr>
      )
    })
  }

  const addRandom = () => {
    if (otherCelebs.length <= 0) {
    return
  }

    let randomNum = Math.floor(Math.random() * otherCelebs.length)
    let tempCelebs = [...stateCelebs]
    let tempAllCelebs = [...otherCelebs]
    tempCelebs.unshift(tempAllCelebs[randomNum])
    tempAllCelebs.splice(randomNum, 1)
    setStateCelebs(tempCelebs)
    setOtherCelebs(tempAllCelebs)
  }
  
  const sortByName = () => {
    let sortedArr = [...stateCelebs].sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    })
    return setStateCelebs(sortedArr);
  }

  const sortByPopularity = () => {
    let sortedArr = [...stateCelebs].sort((a, b) => b.popularity - a.popularity)
    return setStateCelebs(sortedArr);
  }

  const deleteContact = (i) => {
    let newArr = [...stateCelebs];
    newArr.splice(i, 1);
    return setStateCelebs(newArr);
  }

  return (
    <div>
      <table style={{margin: 'auto'}}>
        <thead>
          <td><button class="action-btn" onClick={addRandom}>Add Random Actor</button></td>
          <td><button class="action-btn" onClick={sortByName}>Sort By Name</button></td>
          <td><button class="action-btn" onClick={sortByPopularity}>Sort By Popularity</button></td>
          <td style={{textTransform: 'uppercase'}}>Delete ▼</td>
        </thead>
        <tbody>
          <ShowFive/>
        </tbody>
      </table>
    </div>
  )
}

export default App;

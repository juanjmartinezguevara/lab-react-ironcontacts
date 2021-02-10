import React from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [stateCelbs, setStateCelbs] = useState(contacts.splice(0, 5));
  const [otherCelbs, setOtherCelbs] = useState(contacts);
  const showFive = () => {
    return stateCelbs.map((eachContact) => {
      return (
        <li>
          {eachContact.name} <img src={eachContact.pictureUrl} />
        </li>
      );
    });
  };

  const addRandom = () => {
    console.log('hello');
    let randomN = Math.floor(Math.random() * otherCelbs.length);
    let randomCeleb = otherCelbs.splice(randomN, 1)[0];
    let newCelebs = [...stateCelbs];

    newCelebs.push({ ...randomCeleb });

    console.log(randomCeleb, newCelebs);
    setStateCelbs(newCelebs);
  };

  return (
    <div>
      Hello
      {showFive()}
      <button onClick={addRandom}>Add Rendom Actor</button>
    </div>
  );
}

export default App;

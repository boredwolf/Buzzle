import { useState } from 'react';
import {animalArray, adjectifArray} from './Names';
import { Button, ButtonBase, ButtonGroup } from '@mui/material';


const Namegenerator = ({ onNameSelected }) => {
  const [name, setName] = useState('?');
  const [randomName, setRandomName] = useState()

  function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getRandomName() {
    let animal = animalArray[randomNumber(animalArray)];
    let adjective = adjectifArray[randomNumber(adjectifArray)];
    setRandomName(adjective + animal);
  }

  function setUserName(){
      setName(randomName)
      onNameSelected(randomName)
  }
  return (
      <>
      <div className="username">
      <p className="list-theme">{randomName}</p> {randomName && 
       <Button variant='contained'  color="secondary" onClick={setUserName}>PICK IT</Button>}
       </div>
      <Button variant='contained' color="secondary" onClick={getRandomName} >Click to generate a random name</Button>
      
       


      
      
     
    </>
  );
};

export default Namegenerator;

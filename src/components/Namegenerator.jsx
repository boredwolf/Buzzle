import { useState, useEffect } from "react";
import { animalArray, adjectifArray } from "./Names";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Namegenerator = ({ onNameSelected, username}) => {
  const [name, setName] = useState("?");
  const [randomName, setRandomName] = useState("");
 const [isNamePicked, setPickedName] = useState(false)

  function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
  }
  function getRandomName() {
    let animal = animalArray[randomNumber(animalArray)];
    let adjective = adjectifArray[randomNumber(adjectifArray)];
    setRandomName(adjective + animal);
  }

 useEffect(() => {
 getRandomName()
   }
 , [name])

  function setUserName() {
    setName(randomName);
    onNameSelected(randomName);
  }
  return (
    <>
      <Avatar randomName={randomName} />
      <div className="username">
        { isNamePicked ? <p className="random-username">{username}</p> : null}
        
        
      </div>
      <button
        className="play-button"
        onClick={() => { setUserName(), setPickedName(true)}}
      >
        Generate a random name

      </button>
      {isNamePicked ?  (
        <div className="play-button-container">
        <button className="play-button">
          <Link to="/Settings">Go !</Link>
        </button>
      </div>
      ) : (null)}
      
    </>
  );
};

export default Namegenerator;

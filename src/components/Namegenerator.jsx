import { useState } from "react";
import { Button } from "@mui/material";
import { animalArray, adjectifArray } from "./Names";
import Avatar from "./Avatar";

const Namegenerator = ({ onNameSelected }) => {
  const [name, setName] = useState("?");
  const [randomName, setRandomName] = useState();

  function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getRandomName() {
    let animal = animalArray[randomNumber(animalArray)];
    let adjective = adjectifArray[randomNumber(adjectifArray)];
    setRandomName(adjective + animal);
  }

  function setUserName() {
    setName(randomName);
    onNameSelected(randomName);
  }
  return (
    <>
      <Avatar randomName={randomName} />
      <div className="username">
        <p className="random-username">{randomName}</p>{" "}
        {randomName && (
          <Button
            className="button-pickit"
            variant="contained"
            color="secondary"
            onClick={setUserName}
          >
            PICK IT
          </Button>
        )}
      </div>
      <Button
        className="button-generate-username"
        variant="contained"
        color="secondary"
        onClick={getRandomName}
      >
        Click to generate a random name
      </Button>
    </>
  );
};

export default Namegenerator;

import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Namegenerator from './Namegenerator';

const Username = ({ onNameSelected }) => {
  return (
    <div className="div-rules">
      <h2 className="choose-username">Choose your username </h2>
      <Namegenerator onNameSelected={onNameSelected} />
      <div className="play-button-container">
        <button className="play-button">
          <Link to="/Settings">Go !</Link>
        </button>
      </div>
    </div>
  );
};

export default Username;

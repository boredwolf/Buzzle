import React from 'react';
import Namegenerator from './Namegenerator';

const Username = ({ onNameSelected }) => {
    return(
      <div className="div-rules">
    <h2 className="choose-username">Choose your username </h2>
    <Namegenerator onNameSelected={onNameSelected} />
  </div>
    )
};

export default Username;

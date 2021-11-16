import React from 'react';
import logo from '../assets/images/logo-violet.png';

const Scores = () => {
return(
<div className="questions-container">
<div className="questions">
    <div id="logo-questions">
        <img className="logo" src={logo} alt="logo Buzzle" />
    </div>
    <h2>LeaderBoard</h2>
    <ul className="ul-list">
        <li className="list-theme">Utilisateur 1</li>
        <li className="list-theme">Utilisateur 2</li>
        <li className="list-theme">Utilisateur 3</li>
        <li className="list-theme">Utilisateur 4</li>
        <li className="list-theme">Utilisateur 5</li>
    </ul>
    </div>
</div>
)};

export default Scores;
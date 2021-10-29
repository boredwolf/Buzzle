import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import logo from '../assets/images/logo-violet.png';
import DisplayRules from './DisplayRules';

const Home = () => {
  const [name, setName] = useState('Frero , choose your username below ');
  return (
    <div>
      <div id="logo">
        <img className="logo" src={logo} alt="logo Buzzle" />
      </div>
      <div className="hello-user">
        <h2>Hello {name}!</h2>
      </div>
      <DisplayRules onNameSelected={(name) => setName(name)} />
     
    </div>
  );
};

export default Home;

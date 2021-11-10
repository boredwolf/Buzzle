import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Questions from './components/Questions';
import EndGame from './components/EndGame';
import Scores from './components/Scores';
import Welcome from './components/Welcome';

function App() {
  const [username, setUsername] = useState( 'Choose your username below ')
  const [score, setScore] = useState(0);


  function onUserNameChange(username) {
    setUsername(username);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home username={username} onUserNameChange={onUserNameChange} />
        </Route>
        <Route path="/questions">
          <Questions username={username} />
        </Route>
        <Route path="/endgame">
          <EndGame username={username} score={score}/>
        </Route>
        <Route path="/scores">
          <Scores />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

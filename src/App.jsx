import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Questions from './components/Questions';
import Endgame from './components/Endgame';
import Scores from './components/Scores';
import Welcome from './components/Welcome';

function App() {
  const [username, setUsername] = useState( 'Choose your username below ')

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
          <Questions  username={username} />
        </Route>
        <Route path="/endgame">
          <Endgame username={username}/>
        </Route>
        <Route path="/scores">
          <Scores />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

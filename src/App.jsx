import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Questions from './components/Questions';
import EndGame from './components/EndGame';
import Scores from './components/Scores';
import Welcome from './components/Welcome';
import UrlContext from './Contexts/UrlContext';

function App() {
  const [username, setUsername] = useState( 'Choose your username below ')
 const [url, setUrl] = useState()
 const [difficulty, setDifficulty] = useState("")
  const [score, setScore] = useState(0);


  function onUserNameChange(username) {
    setUsername(username);
  }

  return (
    <BrowserRouter>
    <UrlContext.Provider
    value={{url, setUrl, difficulty, setDifficulty}}>
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
    </UrlContext.Provider>
    </BrowserRouter>
  );
}

export default App;

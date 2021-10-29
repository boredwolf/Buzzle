import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Questions from './components/Questions';
import Endgame from './components/Endgame';
import Scores from './components/Scores';
import Welcome from './components/Welcome';
import Namegenerator from './components/Namegenerator';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/questions" component={Questions}>
        </Route>
        <Route path="/endgame">
          <Endgame />
        </Route>
        <Route path="/scores">
          <Scores />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Questions from './components/Questions';
import Endgame from './components/Endgame';
import Scores from './components/Scores';
import Welcome from './components/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/endgame">
            <Endgame />
          </Route>
          <Route path="/scores">
            <Scores />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

  
}

export default App;

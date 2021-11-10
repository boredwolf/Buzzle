import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import Rules1 from "./Rules1";
import Rules2 from "./Rules2";
import Rules3 from "./Rules3";
import Username from "./Username";

const DisplayRules = ({ onNameSelected }) => {
  return (
    <div id="display-rules">
      <div className="div-surname-rules">
        <Username onNameSelected={onNameSelected} />
        <div className="div-rules">
          <Router>
            <Switch>
              <Route exact path="/home" component={Rules1} />
              <Route path="/rules2" component={Rules2} />
              <Route path="/rules3" component={Rules3} />
            </Switch>
            <nav className="container-button">
              <NavLink exact activeClassName="active" to="/home">
                <RadioButtonCheckedIcon />
              </NavLink>
              <NavLink activeClassName="active" to="/rules2">
                <RadioButtonCheckedIcon />
              </NavLink>
              <NavLink activeClassName="active" to="/rules3">
                <RadioButtonCheckedIcon />
              </NavLink>
            </nav>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default DisplayRules;

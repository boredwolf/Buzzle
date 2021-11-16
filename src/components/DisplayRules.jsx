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
      </div>
    </div>
  );
};

export default DisplayRules;

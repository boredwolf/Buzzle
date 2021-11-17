import logo from "../assets/images/logo-violet.png";
import DisplayRules from "./DisplayRules";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

const Home = ({
  username = "Choose your username below ",
  onUserNameChange,
}) => {
  return (
    <>
      <div className="rules">
        <Link to="/Rules3">
          <HelpIcon />
        </Link>
      </div>
      <div className="home">
        <div id="logo">
          <div className="home-logo-help-container">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
        </div>
        

        <DisplayRules onNameSelected={onUserNameChange} />
      </div>
    </>
  );
};

export default Home;

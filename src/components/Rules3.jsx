import logo from "../assets/images/logo-violet.png";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { NavLink, Link } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";

const Rules3 = () => {
  return (
    <>
      <div className="close-button-container">
          <Link to="/Home">
            <CancelRoundedIcon sx={{ fontSize: 27 }} />
          </Link>
        </div>
      <div className="home">
        <div id="logo">
          <div className="home-logo-help-container">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
        </div>
        
        <div className="rules-container">
          
          <div className="text-rules-container">
            <h2 className="rules-title">How to Play ?</h2><h3 className="choose-title">Stay alive</h3>
            <ul className="ul-list-rules">
              <li className="rules-theme">
                You have to survive to a series of 50 questions
              </li>
              <li className="rules-theme">
                First of all, you will be asked to choose a theme and a difficulty
              </li>
              <li className="rules-theme">
                You have 3 lifes at the start of the game
              </li>
              <li className="rules-theme">
                For each question, click on the correct answer
                before the timer reaches 0
              </li>
              <li className="rules-theme">
                For each wrong answer, or if the timer reaches 0, you'll lose a life
              </li>
              <li className="rules-theme">
                Once you have no life remaining the game is over
              </li>
              <li className="rules-theme">Good Luck !</li>
            </ul>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Rules3;

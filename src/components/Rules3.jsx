import logo from "../assets/images/logo-violet.png";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { NavLink, Link } from "react-router-dom";

const Rules3 = () => {
  return (
      <div className="questions-container">
        <div className="text-rules-container">
          
          <div className="close-button-container">
          <div id="logo-questions">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
            <Link to="/Home">
              <CancelRoundedIcon sx={{ fontSize: 40 }} />
            </Link>
          </div>
            <h2 className="rules-title">How to Play ?</h2>
            <h3 className="choose-title">Stay alive</h3>
            <ul className="ul-list">
            <li className="rules-theme">
              The aim of the Buzzle is to survive to a series of 50 questions
              </li>
              <li className="rules-theme">
              First of all, you will be asked to choose the theme of the questions and their difficulty
              </li>
              <li className="rules-theme">Then, 3 lifes will be given to you at the start of the game</li>
              <li className="rules-theme">
              For each question, you will need to click on the correct answer before the timer reaches 0
              </li>
              <li className="rules-theme">
              For each wrong answer you'll lose a life
              </li>
              <li className="rules-theme">
              If the timer reaches 0 before you answered you'll lose a life
              </li>
              <li className="rules-theme">Once you have no life remaining the game is over</li>
              <li className="rules-theme">Good Luck !</li>
          </ul>
        </div>
      </div>
      )};

export default Rules3;

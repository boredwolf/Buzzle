import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-violet.png";
import Categories from "./Categories";
import Difficulty from "./Difficulty";
import HelpIcon from "@mui/icons-material/Help";

const Settings = ({ username }) => {
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
        <h2 className='username-settings'>Hello {username} !</h2>
        <div id="display-rules">
          <div className="div-surname-rules">
            <div className="div-rules">
              <Categories />
            </div>
            <div className="div-rules">
              <Difficulty />
              <div className="play-button-container">
                <button className="play-button">
                  <Link to="/questions">Play !</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="play-button-container"></div>
      </div>
    </>
  );
};

export default Settings;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-violet.png";
import Categories from "./Categories";
import Difficulty from "./Difficulty";

const Settings = ({ username }) => {
  return (
    <>
      <div>
        <div id="logo">
          <img className="logo" src={logo} alt="logo Buzzle" />
        </div>
        <h2 className="hello-user">Hello {username} !</h2>

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

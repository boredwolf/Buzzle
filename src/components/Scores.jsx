import { useEffect, useState } from "react";
import logo from "../assets/images/logo-violet.png";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

const Scores = () => {
  const urlApiLeaderboard = `${process.env.REACT_APP_BUZZLE_API}/leaderboard/order`;
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(urlApiLeaderboard)
      .then((response) => response.json())
      .then((data) => setLeaderboard(data));
  }, []);

  return (
    <>
      <div className="rules">
        <Link to="/rules3">
          <HelpIcon />
        </Link>
      </div>
      <div className="home">
        <div id="logo">
          <div className="home-logo-help-container">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
        </div>
      </div>
      <div className="questions-container">
        <div className="questions">
          <h2>LeaderBoard</h2>
          <ul className="ul-list">
            {leaderboard.map((classement) => (
              <li className="list-theme">
                {classement.username}
                {classement.score}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Scores;

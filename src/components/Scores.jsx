import { useEffect, useState } from "react";
import logo from "../assets/images/logo-violet.png";
import HelpIcon from "@mui/icons-material/Help";
import { NavLink, Link } from "react-router-dom";

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
        <div className="container-leaderbord">
          <h2>LeaderBoard</h2>
          <div className="table-container">
            <ul className="ul-list">
              <table>
                <tr>
                  <th>Ranking</th>
                  <th>Avatar</th>
                  <th>UserName</th>
                  <th>Score</th>
                </tr>
                <tbody>
                  {leaderboard.map((classement, index) => (
                    <tr className="list-theme">
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`https://avatars.dicebear.com/api/personas/${classement.username}.svg`}
                          className="avatar-leaderboard"
                        />
                      </td>
                      <td>{classement.username}</td>
                      <td>{classement.score} points</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ul>
          </div>
          <div className="endgame-buttons">
            <NavLink exact to="/questions">
              <button type="button" className="end-button">
                Replay
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scores;

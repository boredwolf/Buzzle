import { useState, useEffect } from "react";
import logo from "../assets/images/logo-violet.png";
import Scores from "./Scores";
import { NavLink, Link } from "react-router-dom";
import Award from "./Award";
import HelpIcon from "@mui/icons-material/Help";

const EndGame = ({ username, score }) => {
  const [quote, setQuote] = useState();
  const [loaded, setLoaded] = useState(false);

  const indRandQuote = Math.floor(Math.random() * 100);

  const URL = "https://api.whatdoestrumpthink.com/api/v1/quotes";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setQuote(data.messages.personalized[indRandQuote]));
    setLoaded(true);
  }, []);

  return (
    loaded && (
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

          <div className="questions-container">
            <div className="endgame-container">
              <Award score={score} />
              <div className="endgame-quote-container">
                <div className="infos-endgame">Score: {score} points</div>

                <p className="endgame-quote">
                  As Trump would say :{" "}
                  <span className="username-cap">{username}</span> {quote}
                </p>
                <div className="endgame-buttons">
                  <NavLink exact to="/questions">
                    <button type="button" className="end-button">
                      Replay
                    </button>
                  </NavLink>
                  <NavLink exact to="/scores">
                    <button type="button" className="end-button">
                      Leaderboard
                    </button>{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default EndGame;

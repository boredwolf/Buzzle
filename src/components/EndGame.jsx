import { useState, useEffect } from "react";
import logo from "../assets/images/logo-violet.png";
import { NavLink } from "react-router-dom";
import Award from "./Award";

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
      <div className="questions-container">
        <div className="questions">
          <div id="logo-questions">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
          <Award score={score} />
          <div className="endgame-quote-container">
            <div className="infos-endgame">Score : {score} points</div>

            <p className="endgame-quote">
              As Trump would say : {username} {quote}
            </p>
            <div className="endgame-buttons">
              <NavLink exact to="/Questions">
                <button type="button" className="end-button">Replay</button>
              </NavLink>
              <NavLink exact to="/Scores">
                <button type="button" className="end-button">Leaderboard</button>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default EndGame;

import { useState, useEffect } from 'react';
import logo from '../assets/images/logo-violet.png';
import PlayerInfos from "./PlayerInfos";

const EndGame = ({ username }) => {
  const [quote, setQuote] = useState();
  const [loaded, setLoaded] = useState(false);

  const indRandQuote = Math.floor(Math.random() * 100);

  const URL = 'https://api.whatdoestrumpthink.com/api/v1/quotes';

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setQuote(data.messages.personalized[indRandQuote]));
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="QuestionsContainer">
        <div className="Questions">
<<<<<<< HEAD
          <div id="logo-questions">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
              <div className="endgame-quote-container">
                  <img className="avatarImg" src={'https://avatars.dicebear.com/api/personas/' + username + '.svg'} alt="avatar"/>
                      <p className="endgame-quote">As Trump would say : {username} {quote} </p>
              </div>
        </div>
=======
                <div id="logo-questions">
                <img className="logo" src={logo} alt="logo Buzzle" />
                </div>
                    <div className="endgame-quote-container">
                    <h2 className="game-over-title">Game Over</h2>
                            <img className="avatarImg" src={'https://avatars.dicebear.com/api/personas/' + username + '.svg'} alt="avatar"/>
        <p className="endgame-quote">As Trump would say : {username} {quote}
        </p>
      </div>
      </div>
>>>>>>> develop
      </div>
    )
  );
};
export default EndGame;

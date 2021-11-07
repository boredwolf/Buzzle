import { useState, useEffect } from 'react';
import logo from '../assets/images/logo-violet.png';
import PlayerInfos from "./PlayerInfos";

const Endgame = ({ username }) => {
  const [quote, setQuote] = useState();
  const [loaded, setLoaded] = useState(false);

  const indRandQuote = Math.floor(Math.random() * 100);

  const URL = 'https://api.whatdoestrumpthink.com/api/v1/quotes';

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setQuote(data.messages.personalized[indRandQuote]));
    setLoaded(true);
    console.log(loaded);
    console.log(quote);
  }, []);

  return (
    loaded && (
      <div className="QuestionsContainer">
        <div className="Questions">
          <div id="logo-questions">
            <img className="logo" src={logo} alt="logo Buzzle" />
          </div>
              <div className="endgame-quote-container">
                  <img className="avatarImg" src={'https://avatars.dicebear.com/api/personas/' + username + '.svg'} alt="avatar"/>
                      <p className="endgame-quote">As Trump would say : {username} {quote} </p>
              </div>
        </div>
      </div>
    )
  );
};
export default Endgame;

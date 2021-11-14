import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { NavLink, Link } from "react-router-dom";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PlayerInfos from "./PlayerInfos";
import logo from "../assets/images/logo-violet.png";
import Timer from "./Timer";
import UrlContext from "../Contexts/UrlContext";

function Questions({ username, onScoreChange }) {
  const { url, setUrl } = useContext(UrlContext);
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);
  const [idName, setIdName] = useState();
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(200);
  const [life, setLife] = useState(3);
  const history = useHistory();

  function insertCorr(arr, corr) {
    const randInd = Math.floor(Math.random() * 4);
    arr.splice(randInd, 0, corr);
  }

  function handleLife() {
    if (life > 1) {
      setLife(life - 1);
    }

    if (life === 1) {
      setLife(life - 1);
      history.push("/endgame");
    }
  }

  function onResponseClick(answer) {
    setTimeout(() => {
      if (qInd + 1 < questions.length) {
        insertCorr(
          questions[qInd + 1].incorrect_answers,
          questions[qInd + 1].correct_answer
        );
        setQInd(qInd + 1);
      } else {
        setQInd(1000);
      }
      setCounter(200);
    }, 2000);

    if (answer === questions[qInd].correct_answer) {
      setIdName("green-button");
      setScore(score + 100);
    } else {
      setIdName("red-button");
      handleLife();
    }
  }

  function onTimeout() {
    onResponseClick("");
  }

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        insertCorr(
          data.results[0].incorrect_answers,
          data.results[0].correct_answer
        );
        setQuestions(data.results);
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    setIdName();
  }, [qInd]);

  useEffect(() => {
    onScoreChange(score);
  }, [score]);

  return (
    <div className="questions-container">
      <img className="logo logo-questions" src={logo} alt="logo Buzzle" />
      <div className="questions">
        {!loaded && <div className="loader" />}
        {loaded && qInd < questions.length && (
          <div className="q-and-a-container">
            <div className="close-button-container">
              <Timer
                counter={counter}
                setCounter={setCounter}
                onTimeout={onTimeout}
              />
              <Link to="/Home">
                <CancelRoundedIcon sx={{ fontSize: 40 }} />
              </Link>
            </div>
            <div className="num-questions">
              Question {qInd + 1} / {questions.length}
            </div>

            <div className="container-questions-answers">
              <h1
                className="question"
                dangerouslySetInnerHTML={{ __html: questions[qInd].question }}
              />

              <div className="button-container">
                {questions[qInd].incorrect_answers.map((answer) => (
                  <button
                    type="button"
                    variant="contained"
                    key={answer}
                    onClick={() => onResponseClick(answer)}
                    className="response-button"
                    id={idName}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {loaded && qInd >= questions.length && (
          <div className="end-button-container">
            <NavLink to="/endgame">
              <button type="button" className="end-button">
                End of the Game
              </button>
            </NavLink>
          </div>
        )}
      </div>

      <PlayerInfos username={username} score={score} life={life} />
    </div>
  );
}

export default Questions;

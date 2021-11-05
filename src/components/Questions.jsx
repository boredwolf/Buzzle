import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { NavLink, Link } from "react-router-dom";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PlayerInfos from "./PlayerInfos";
import logo from "../assets/images/logo-violet.png";

function Questions({ username }) {
  const url = "https://opentdb.com/api.php?amount=10";
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);
  const [idName, setIdName] = useState();
  const [score, setScore] = useState(0);
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
    }, 2000);

    console.log(answer, questions[qInd].correct_answer);

    if (answer === questions[qInd].correct_answer) {
      setIdName("green-button");
      setScore(score + 100);
    } else {
      setIdName("red-button");
      handleLife();
    }
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

  return (
    <div className="QuestionsContainer">
      <div className="Questions">
        <div id="logo-questions">
          <img className="logo" src={logo} alt="logo Buzzle" />
        </div>

        {!loaded && <div class="loader"></div>}

        {loaded && qInd < questions.length && (
          <div className="QandAContainer">
            <div className="close-button-container">
            <div>
            <Link to="/Home">
              <CancelRoundedIcon />
            </Link>
            </div>
            </div>
            <div className="num-questions">
          Question {qInd + 1} / {questions.length}
          </div>
            <h1
              className="Question"
              dangerouslySetInnerHTML={{ __html: questions[qInd].question }}
            />

            <div className="ButtonContainer">
              {questions[qInd].incorrect_answers.map((answer) => (
                <button
                  type="button"
                  variant="contained"
                  key={answer}
                  onClick={() => onResponseClick(answer)}
                  className="ResponseButton"
                  id={idName}
                >
                  {answer}
                </button>
              ))}
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

      <PlayerInfos username={username} score={score} />
    </div>
  );
}

export default Questions;

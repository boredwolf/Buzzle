import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { NavLink, Link } from "react-router-dom";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PlayerInfos from "./PlayerInfos";
import logo from "../assets/images/logo-violet.png";
import Timer from "./Timer";
import UrlContext from "../Contexts/UrlContext";
import Questionnaire from "./Questionnaire";

function Questions({ username, onScoreChange }) {
  const { url, setUrl } = useContext(UrlContext);
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(20);
  const [life, setLife] = useState(3);
  const history = useHistory();
  const [answered, setAnswered] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleAnswer = (answer) => {
    // set the counter and index
    setTimeout(() => {
      if (qInd + 1 < questions.length) {
        setQInd(qInd + 1);
      } else {
        setQInd(1000);
      }
      setCounter(20);
      setShowAnswers(false);
    }, 5000);

    if (!showAnswers) {
      //Prevent double answers
      //set score and life if correct answer or not
      if (answer === questions[qInd].correct_answer) {
        setScore(score + 100);
        setCounter(5);
      } else {
        setCounter(5);
        handleLife();
        setAnswered(true);
      }
      setShowAnswers(true);
    }
  };

  //function to handle the life
  function handleLife() {
    if (life > 1) {
      setLife(life - 1);
    }

    if (life === 1) {
      setLife(life - 1);
      setTimeout(() => {
        history.push("/endgame");
      }, 2000);
    }
  }

  function onTimeout() {
    handleAnswer("");
  }

  //fetching the api data
  useEffect(() => {
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    onScoreChange(score);
  }, [score]);

  return (
    <div>
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
                  dangerouslySetInnerHTML={{
                    __html: atob(questions[qInd].question),
                  }}
                />

                <div className="button-container">
                  <Questionaire
                    data={questions[qInd]}
                    showAnswers={showAnswers}
                    handleAnswer={handleAnswer}
                  />
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
    </div>
  );
}

export default Questions;

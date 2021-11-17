import { useState, useEffect, useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import PlayerInfos from "./PlayerInfos";
import logo from "../assets/images/logo-violet.png";
import Timer from "./Timer";
import UrlContext from "../Contexts/UrlContext";
import Questionnaire from "./Questionnaire";
import HelpIcon from "@mui/icons-material/Help";



const TIME_FOR_QUESTION = 20;
const TIME_FOR_SHOWING_ANSWERS = 5;

function Questions({ username, onFinish }) {
  const history = useHistory();
  const { url, setUrl } = useContext(UrlContext);
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(TIME_FOR_QUESTION);
  const [life, setLife] = useState(3);
  const [answered, setAnswered] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const endGame = () => {
    onFinish(score);
    history.push("/endgame");
  };

  const handleAnswer = (answer) => {
    // set the counter and index
    setTimeout(() => {
      const nextQuestionIndex = qInd + 1;

      if (nextQuestionIndex >= questions.length) {
        return endGame();
      }

      setQInd(nextQuestionIndex);
      setCounter(TIME_FOR_QUESTION);
      setShowAnswers(false);
    }, 5000);

    if (!showAnswers) {
      // Prevent double answers
      // set score and life if correct answer or not
      if (answer === questions[qInd].correct_answer) {
        setScore(score + 100);
      } else {
        setLife(life - 1);
        setAnswered(true);
      }

      setCounter(TIME_FOR_SHOWING_ANSWERS);
      setShowAnswers(true);
    }
  };

  useEffect(() => {
    if (life === 0) {
      setTimeout(() => {
        endGame();
      }, TIME_FOR_SHOWING_ANSWERS * 1000);
    }
  }, [life]);

  function onTimeout() {
    handleAnswer("");
  }

  // fetching the api data
  useEffect(() => {
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

  return (
    
    <div>
       <div className="rules">
        <Link to="/Rules3">
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
                  <Questionnaire
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
    </div>
  );
}

export default Questions;

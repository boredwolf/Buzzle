import { React, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-violet.png';
import PlayerInfos from './PlayerInfos';


function Questions({ username }) {
  const url = 'https://opentdb.com/api.php?amount=10';
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);
  const [idName, setIdName] = useState();
  const [score, setScore] = useState(0);

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

  function insertCorr(arr, corr) {
    const randInd = Math.floor(Math.random() * 4);
    arr.splice(randInd, 0, corr);
  }

  const handleButton = (e, ans) => {
    e.preventDefault();
    if (qInd + 1 < questions.length) {
      insertCorr(
        questions[qInd + 1].incorrect_answers,
        questions[qInd + 1].correct_answer
      );
      setQInd(qInd + 1);
    } else {
      setQInd(0);
    }
  };

  return (
    <div className="QuestionsContainer">
      <div className="Questions">
        <div id="logo-questions">
          <img className="logo" src={logo} alt="logo Buzzle" />
        </div>
        <div class="num-questions">
          Question {qInd + 1} / {questions.length}
        </div>

        {!loaded ? (
          <div>
            <p>chargement</p>
            </div>) :
            loaded && qInd < questions.length ? (
          <div className="QandAContainer">
            <h1
              className="Question"
              dangerouslySetInnerHTML={{ __html: questions[qInd].question }}
            ></h1>
            <div className="ButtonContainer">
              {questions[qInd].incorrect_answers.map((a) => {
                return (
                  <div>
                    <button
                      variant="contained"
                      key={a}
                      onClick={(e) => {
                        setTimeout(() => {
                          handleButton(e, a);
                        }, 2000);
                        if (a === questions[qInd].correct_answer) {
                          setIdName('green-button');
                          setScore(score + 100);
                        } else {
                          setIdName('red-button');
                        }
                      }}
                      className="ResponseButton"
                      id={idName}
                      
                    >
                      {a}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
            ) : (
              <>
                <NavLink exact to="/endgame">
                  <button>end of the game</button>
                </NavLink>
                </>
            )
        }
      </div>
      <PlayerInfos username={username} score={score} />
    </div>
  );}

export default Questions;

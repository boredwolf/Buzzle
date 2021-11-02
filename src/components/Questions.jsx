import { React, useState, useEffect } from 'react';
import logo from '../assets/images/logo-violet.png';
import PlayerInfos from './PlayerInfos';

function Questions() {
  const url = 'https://opentdb.com/api.php?amount=10';
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);

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
        <p class="num-questions">
          Question {qInd + 1} / {questions.length}
        </p>
        {loaded && (
          <div className="QandAContainer">
            <h1
              className="Question"
              dangerouslySetInnerHTML={{ __html: questions[qInd].question }}
            ></h1>
            <div className="ButtonContainer">
              {questions[qInd].incorrect_answers.map((a) => {
                return (
                  <div className="ResponseButton">
                    <button
                      variant="contained"
                      key={a}
                      onClick={(e) => handleButton(e, a)}
                    >
                      {a}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      
      <PlayerInfos />
    </div>
  );
}

export default Questions;

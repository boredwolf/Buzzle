import { React, useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function Questions() {
  const url = 'https://opentdb.com/api.php?amount=10';
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [qInd, setQInd] = useState(0);

  const loadQuestions = async () => {
    let response = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        insertCorr(
          data.results[0].incorrect_answers,
          data.results[0].correct_answer
        );
        setQuestions(data.results);
        setLoaded(true);
      });
  };

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
      loadQuestions();
      setQInd(0);
    }
  };

  return (
    <div className="questions">
      <Button variant="contained" onClick={loadQuestions}>
        Play
      </Button>
      {loaded && (
        <div className="container-question">
          <p className="question">{questions[qInd].question}</p>
          {questions[qInd].incorrect_answers.map((a) => {
            return (
              <Button
                variant="outlined"
                key={a}
                onClick={(e) => handleButton(e, a)}
              >
                {a}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Questions;

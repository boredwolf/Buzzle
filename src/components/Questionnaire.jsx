import React from "react";

const Questionnaire = ({
  showAnswers,
  handleAnswer,
  data: {  correct_answer, answers },
}) => {

  return (
    <div>
      
      <div >
       {answers.map((answer, idx) => {
         const bgColor = showAnswers 
         ? answer === correct_answer 
         ? 'green-button' 
         : 'red-button' 
         : null;
         
         return (
        <button
        type = "button"
        variant = "contained"
        key={idx}
          className={`${bgColor} response-button`}
         onClick={() => handleAnswer(answer)}
          dangerouslySetInnerHTML={{__html: atob(answer)}}
          />
          )})}
      </div>
     
    </div>
  );
};

export default Questionnaire;

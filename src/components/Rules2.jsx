import UrlContext from "../Contexts/UrlContext";
import { useContext } from "react";

const Rules2 = () => {
  const { setDifficulty} = useContext(UrlContext);
  return (
    <div>
      <h2 className="rules-title">How to Play ?</h2>
      <h3 className="choose-title">Choose your difficulty </h3>
      <ul className="ul-list">
        <li
          className="list-theme"
          onClick={() => setDifficulty("&difficulty=easy")}
        >
          Easy
        </li>
        <li
          className="list-theme"
          onClick={() => setDifficulty("&difficulty=medium")}
        >
          Medium
        </li>
        <li
          className="list-theme"
          onClick={() => setDifficulty("&difficulty=hard")}
        >
          Hard
        </li>
      </ul>
    </div>
  );
};

export default Rules2;

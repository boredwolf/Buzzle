import UrlContext from "../Contexts/UrlContext";
import { useContext } from "react";

const Rules1 = () => {
  const {  setUrl } = useContext(UrlContext);
  const { difficulty} = useContext(UrlContext)

  return (
    <div>
      <h2 className="rules-title">How to Play ?</h2>
      <h3 className="choose-title">Choose a theme</h3>
      <ul className="ul-list">
        <li
          className="list-theme"
          onClick={() =>
            setUrl(
              `https://opentdb.com/api.php?amount=50&category=10${difficulty}`
            )
          }
        >
          Random theme
        </li>
        <li
          className="list-theme"
          onClick={() =>
            setUrl(`https://opentdb.com/api.php?amount=50&category=15${difficulty}`)
          }
        >
          Video Games
        </li>
        <li
          className="list-theme"
          onClick={() =>
            setUrl(`https://opentdb.com/api.php?amount=50&category=23${difficulty}`)
          }
        >
          History
        </li>
        <li
          className="list-theme"
          onClick={() =>
            setUrl(`https://opentdb.com/api.php?amount=50&category=11${difficulty}`)
          }
        >
          Movies
        </li>
        <li
          className="list-theme"
          onClick={() =>
            setUrl(`https://opentdb.com/api.php?amount=50&category=21${difficulty}`)
          }
        >
          Sports
        </li>
      </ul>
    </div>
  );
};

export default Rules1;

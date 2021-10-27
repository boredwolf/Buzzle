import React from 'react';
import './App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

{
  /* Adèle */
}
const PlayerInfos = () => {
  return (
    <div className="player-infos-container1">
      <div className="player-infos-container2">
        <ul>
          <li>Surname</li>
        </ul>
        <ul>
          <li>Score: 300 points</li>
        </ul>

        {/* icons MUI */}
        <ul>
          <li>
            <FavoriteIcon />
          </li>
          <li>
            <FavoriteIcon />
          </li>
          <li>
            <FavoriteBorderIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerInfos;

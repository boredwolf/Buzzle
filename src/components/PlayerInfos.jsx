import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PlayerInfos = ({ username }) => {
  return (
    <div className="player-infos-container1">
      <div className="player-infos-container2">
        <ul>
          <li>{ username }</li>
        </ul>
        <ul>
          <li>Score: 300 points</li>
        </ul>
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

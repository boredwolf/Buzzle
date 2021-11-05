import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const PlayerInfos = ({ username, score}) => {
  return (
    <div className="player-infos-container1">
      <div className="player-infos-container2">
        <ul>
          <li>{username}</li>
        </ul>
        <ul>
          <li>Score: {score}points</li>
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
          <li>
            <button>
              <Link to="/Home">Exit</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerInfos;

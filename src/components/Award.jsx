import badge1 from '../assets/images/badge1.png';
import dropdown from '../assets/images/dropdown.png';

const Award = ({score}) => {
  return (
    <>
      <h2 className="game-over-title">
        {score === 5000 ? 'You Win !' : 'Game Over'}
      </h2>
      <img
        className="badgeImg"
        src={score === 5000 ? badge1 : dropdown}
        alt="badge"
      />
    </>
  );
};

export default Award;

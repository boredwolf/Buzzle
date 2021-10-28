import logo from '../assets/images/logo-violet.png';
import DisplayRules from './DisplayRules';

const Home = () => {
  return (
    <div>
      <div id="logo">
        <img className="logo" src={logo} alt="logo Buzzle" />
      </div>
      <div className="hello-user">
        <h2>Hello $User !</h2>
      </div>
      <DisplayRules />
    </div>
  );
};

export default Home;

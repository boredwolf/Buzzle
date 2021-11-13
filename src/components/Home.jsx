import logo from "../assets/images/logo-violet.png";
import DisplayRules from "./DisplayRules";

const Home = ({
  username = "Choose your username below ",
  onUserNameChange,
}) => {
  return (
    <div>
      <div id="logo">
        <img className="logo" src={logo} alt="logo Buzzle" />
      </div>
      <h2 className="hello-user">Hello {username} !</h2>
      <DisplayRules onNameSelected={onUserNameChange} />
    </div>
  );
};

export default Home;

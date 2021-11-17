import Username from "./Username";

const DisplayRules = ({ onNameSelected }) => {
  return (
    <div id="display-rules">
      <div className="div-surname-rules">
        <Username onNameSelected={onNameSelected} />
      </div>
    </div>
  );
};

export default DisplayRules;

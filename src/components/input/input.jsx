import "./index.css";
import PropTypes from "prop-types";

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func.isRequired,
};

export default function Input({ passwordSize, setPasswordSize }) {
  return (
    <input
      type="number"
      id="passwordSize"
      min={1}
      onChange={(ev) => {
        setPasswordSize(ev.target.value);
      }}
      value={passwordSize}
      className="input"
    />
  );
}

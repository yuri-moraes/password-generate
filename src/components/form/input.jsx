import "./index.css";
import PropTypes from "prop-types";

Form.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func.isRequired,
};

export default function Form({ passwordSize, setPasswordSize }) {
  return (
    <div className="form">
      <label htmlFor="passwordSize">Tamanho:</label>
      <input
        type="number"
        id="passwordSize"
        min={1}
        onChange={(ev) => {
          setPasswordSize(ev.target.value);
        }}
        value={passwordSize}
      />
    </div>
  );
}

import Styles from "./Checkbox.module.css";

const CheckboxNoState = ({ name, label, defaultValue, onChange }) => {
  const handleChange = (e) => {
    onChange && onChange(e.target.checked);
  };

  return (
    <div className={Styles.checkboxWrapper}>
      <div className={Styles.inputWrapper}>
        <input
          type="checkbox"
          className={Styles.input}
          checked={defaultValue}
          onClick={handleChange}
          id={name}
        />
        <span className={Styles.checkmark}></span>
      </div>
      {label ? (
        <label htmlFor={name} className={Styles.label}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default CheckboxNoState;

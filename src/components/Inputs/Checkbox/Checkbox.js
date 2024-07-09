import Styles from "./Checkbox.module.css";

const Checkbox = ({
  id,
  label,
  checked,
  extraCls = "",
  onChange = () => {},
}) => {
  return (
    <div className={`${Styles.checkboxWrapper} ${extraCls}`}>
      <div className={Styles.inputWrapper}>
        <input
          type="checkbox"
          className={Styles.input}
          id={id}
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span className={Styles.checkmark}></span>
      </div>
      {label ? (
        <label htmlFor={id} className={Styles.label}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Checkbox;

import { useField } from "formik";
import React, {  useEffect, useState } from "react";
import { capitalize } from "lodash";
import classes from "./Input.module.css";
import { get as LodashGet } from "lodash";
// import moment, { isMoment } from "moment";
// import CalendarIcon from "../../assets/calendar.svg";
// import Datetime from "react-datetime";


export const Input = ({ label, leftIcon, rightIcon, disabled, ...props }) => {
  const [field, meta] = useField(props);
  const leftIconClickHandler = props.leftIconClickHandler || (() => {});
  const rightIconClickHandler = props.rightIconClickHandler || (() => {});

  useEffect(() => {
    if (props.defaultValue) props.setFieldValue(props.name, props.defaultValue);
  }, []);

  return (
    <div
      className={`${classes.InputContainer} ${
        disabled ? classes.InputContainerDisable : ""
      }`}
    >
      <div className={classes.InputIconWrapper}>
        {leftIcon && (
          <div
            className={classes.LeftIconWrapper}
            onClick={leftIconClickHandler}
          >
            {leftIcon}
          </div>
        )}
        {rightIcon && (
          <div
            className={classes.RightIconWrapper}
            onClick={rightIconClickHandler}
          >
            {rightIcon}
          </div>
        )}
        <input
          disabled={disabled}
          className={classes.InputPlaceholder}
          type="text"
          {...field}
          {...props}
          required={false}
          placeholder={label}
          style={props.size === "large" ? { height: "3vw" } : {}}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const InputWithOutState = ({ label, ...props }) => {
  return (
    <div className={classes.InputContainer}>
      <div>
        <input {...props} placeholder={label} />
      </div>
    </div>
  );
};

export const InputFile = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  useEffect(() => {
    if (props.defaultValue) props.setFieldValue(props.name, props.defaultValue);
  }, []);
  return (
    <div className={classes.InputContainer}>
      <div>
        <input
          type="file"
          {...field}
          {...props}
          required={false}
          placeholder={label}
          className={classes.FileInput}
        />
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classes.InputContainer}>
      <div className={classes.TextArea}>
        <textarea {...field} {...props} required={false} />
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export const Password = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState("password");

  return (
    <div className={classes.InputContainer}>
      <div className={classes.Label}>
        {capitalize(label)}{" "}
        {props.required ? <span style={{ color: "red" }}>*</span> : ""}
      </div>
      <div className={classes.PasswordContainer}>
        <input type={type} {...field} {...props} required={false} />
        {type === "password" ? (
          <i
            class="fa fa-eye"
            aria-hidden="true"
            style={{ fontSize: "1vw", color: "darkgrey" }}
            onClick={() => setType("text")}
          />
        ) : (
          <i
            class="fa fa-eye-slash"
            aria-hidden="true"
            style={{ fontSize: "1vw", color: "darkgrey" }}
            onClick={() => setType("password")}
          />
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const RadioButtons = ({ label, setFieldValue, ...props }) => {
  const [field, meta] = useField(props);
  useEffect(() => {
    if (!LodashGet(props.values, props.name))
      setFieldValue(props.name, props.options[0].value);
  }, []);
  return (
    <div className={classes.RadioButtons}>
      {props.options.map((option, i) => (
        <div class={classes.radioItem}>
          <input
            type="radio"
            {...field}
            id={option.value}
            value={option.value}
            checked={
              LodashGet(props.values, props.name)
                ? LodashGet(props.values, props.name) === option.value
                : i === 0
            }
          />
          <label for={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export const ToggleButton = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  useEffect(() => {
    if (props.defaultValue) props.setFieldValue(props.name, props.defaultValue);
  }, []);
  return (
    <div>
      <div className={classes.ToggleButton}>
        <label class={classes.Switch}>
          <input
            type="checkbox"
            {...field}
            {...props}
            checked={LodashGet(props.values, props.name) || props.checked}
          />
          <span class={classes.Slider}></span>
        </label>
        <span>{capitalize(label)}</span>
      </div>
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const ToggleButtonWithState = ({
  value,
  onChange,
  disabled = false,
  label = "",
  labelPosition = "right",
  defaultStyle = false,
}) => {
  return (
    <div
      className={classes.ToggleButton}
      style={defaultStyle ? { marginTop: "0", gridColumnGap: "0" } : {}}
    >
      {labelPosition === "left" && <span>{capitalize(label)}</span>}
      <label class={classes.Switch}>
        <input
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          checked={value || false}
        />
        <span class={classes.Slider}></span>
      </label>
      {labelPosition === "right" && <span>{capitalize(label)}</span>}
    </div>
  );
};

export const CheckboxComponent = ({ label, type = "", ...props }) => {
  // eslint-disable-next-line
  const [field, meta] = useField(props);
  return (
    <div>
      <div className={classes.CheckboxContainer}>
        {props.options.map((option, i) => (
          <label className={"checkbox-container checkbox-container-blue"}>
            {option.label}
            <input
              type="checkbox"
              {...field}
              id={option.value}
              value={option.value}
            />
            <span class="checkmark"></span>
          </label>
        ))}
      </div>
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

// export const DateTimePicker = ({ label, defaultValue, ...props }) => {
//   const [field, meta] = useField(props);
//   const [value, setValue] = useState(
//     isMoment(defaultValue) ? defaultValue : moment(defaultValue)
//   );

//   useEffect(() => {
//     if (!defaultValue) props.setFieldValue(props.name, moment(value).format());
//     else props.setFieldValue(props.name, moment(defaultValue).format());
//   }, []);

//   const handleDateChange = (val) => {
//     const value = moment(val).format();
//     props.setFieldValue(props.name, value);
//     setValue(value);
//   };

//   return (
//     <div className={classes.InputContainer + " Input"}>
//       <div className={classes.Dropdown}>
//         <label htmlFor={props.name}>
//           {label} {props.required ? <span className="red">*</span> : null}
//         </label>
//         <div className={classes.DateContainer}>
//           <Datetime
//             dateFormat="DD/MM/yyyy"
//             onOpen={() => props.setFieldTouched(props.name, true)}
//             initialValue={value}
//             closeOnSelect={true}
//             onChange={(val) => handleDateChange(val)}
//             {...props}
//           />
//           <img src={CalendarIcon} alt="" />
//         </div>
//         {meta.touched && meta.error ? (
//           <div className="error">{meta.error}</div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

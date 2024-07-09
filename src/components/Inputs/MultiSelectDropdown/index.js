import React, { useEffect, useState } from "react";
import { useField } from "formik";
import Select, { components } from "react-select";
import Checkbox from "../Checkbox/Checkbox";
import classes from "./index.module.css";
import CloseIcon from "../../../assets/multiclose.svg";
const CustomOption = ({ children, isSelected, ...rest }) => {
  return (
    <components.Option isSelected={isSelected} {...rest}>
      <div className={classes.ContentWrapper}>
        {children}
        <Checkbox checked={isSelected} />
      </div>
    </components.Option>
  );
};

const CustomMultivalueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <div>
        <img className={classes.MultiValueRemove} src={CloseIcon} />
      </div>
    </components.MultiValueRemove>
  );
};

const getControlStyle = (base) => ({
  ...base,
  background: "#F4F7FA 0% 0% no-repeat padding-box !important",
  borderRadius: "0.417vw",
  border: "1px solid #DEE4EB",
  boxShadow: "none",
  "&:hover": {
    border: "1px solid #DEE4EB",
  },
});

const getValueContainerStyle = (base, size) => ({
  ...base,
  margin: 0,
  overflow: "clip",
  height: size === "large" ? "3.2vw" : "2.5vw",
});

const getInputStyle = (base, size, leftIcon) => ({
  ...base,
  fontSize: "0.95vw",
  height: size === "large" ? "3.2vw" : "2.5vw",
  padding: leftIcon ? "0.5vw 2.2vw" : "0.5vw 0.521vw",
  margin: 0,
});

const getSignleValue = (base) => ({
  ...base,
  fontSize: "0.95vw",
  padding: "0 2.2vw",
});

const getPlaceholderStyle = (base) => ({
  ...base,
  fontSize: "0.95vw",
  padding: "0 2.2vw",
});

const getMenuListStyle = (base) => ({
  ...base,
  padding: 0,
  borderRadius: "0.417vw",
});

const getOptionStyle = (base, leftIcon, { isSelected, isFocused }) => ({
  ...base,
  fontSize: "0.95vw",
  color: "#000000",
  backgroundColor: isSelected || isFocused ? "#F7F2FF" : undefined,
  padding: leftIcon ? "0.5vw 2.2vw" : "0.5vw 0.521vw",
  ":active": {
    backgroundColor: "#F7F2FF",
  },
});

const getMenuStyle = (base) => ({
  ...base,
  margin: 0,
});

const getMultiValue = (base) => ({
  ...base,
  backgroundColor: "var(--color-primary)",
  borderRadius: "1.250vw",
  margin: "0.208vw",
  gap: "0.208vw",
});

const getMultiValueLabel = (base) => ({
  ...base,
  color: "white",
});

const getMultiValueRemove = (base) => ({
  ...base,
  color: "white",
  ":hover": {},
});

const MultiSelectDropdown = ({
  disabled,
  leftIcon,
  options = [],
  defaultValue = [],
  ...props
}) => {
  const [values, setValues] = useState([]);
  const [, meta, helpers] = useField(props);

  useEffect(() => {
    const tempDefaultValues = defaultValue.map((item) => item.value);
    const defaultSelected = options.filter((item) =>
      tempDefaultValues.includes(item.value)
    );
    onChange(defaultSelected);
  }, [JSON.stringify(defaultValue)]);

  const onChange = (e) => {
    setValues(e);
    helpers.setValue && helpers.setValue(e);
    props.onChange && props.onChange(e);
  };

  return (
    <div style={disabled && { opacity: "0.5" }}>
      <div className={classes.InputIconWrapper}>
        {leftIcon && <div className={classes.LeftIconWrapper}>{leftIcon}</div>}
        <Select
          isDisabled={disabled}
          value={values}
          closeMenuOnSelect={false}
          isClearable={false}
          isMulti={true}
          hideSelectedOptions={false}
          options={options}
          components={{
            Option: CustomOption,
            MultiValueRemove: CustomMultivalueRemove,
          }}
          styles={{
            control: getControlStyle,
            input: (base) => getInputStyle(base, props.size, leftIcon),
            placeholder: getPlaceholderStyle,
            valueContainer: (base) => getValueContainerStyle(base, props.size),
            // menu: getMenuStyle,
            menuList: getMenuListStyle,
            option: (base, rest) => getOptionStyle(base, leftIcon, rest),
            multiValue: getMultiValue,
            multiValueLabel: getMultiValueLabel,
            multiValueRemove: getMultiValueRemove,
          }}
          onChange={onChange}
          onFocus={() => helpers.setTouched && helpers.setTouched(true)}
        />
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;

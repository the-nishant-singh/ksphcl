import React, { useEffect } from "react";
import Select, { components } from "react-select";
import Checkbox from "../Checkbox/CheckboxNoState";
import classes from "./index.module.css";
import { useState } from "react";

const CustomOption = ({ children, isSelected, ...rest }) => {
  return (
    <components.Option isSelected={isSelected} {...rest}>
      <div className={classes.ContentWrapper}>
        {children}
        <Checkbox defaultValue={isSelected} showError={false} />
      </div>
    </components.Option>
  );
};

const getControlStyle = (base) => ({
  ...base,
  background: "var(--gray-50) 0% 0% no-repeat padding-box !important",
  borderRadius: "8px",
  border: "1px solid #DEE4EB",
  boxShadow: "none",
  "&:hover": {
    border: "1px solid #DEE4EB",
  },
});

const getValueContainerStyle = (base) => ({
  ...base,
  padding: 0,
});

const getInputStyle = (base, size, leftIcon) => ({
  ...base,
  fontSize: "0.95vw",
  height: size === "large" ? "3.2vw" : "2.5vw",
  padding: leftIcon ? "0.5vw 2.2vw" : "0.5vw 0.521vw",
  margin: 0,
});

const getSignleValue = (base, leftIcon) => ({
  ...base,
  fontSize: "0.95vw",
  padding: leftIcon ? "0 2.2vw" : "0 0.521vw",
});

const getPlaceholderStyle = (base) => ({
  ...base,
  fontSize: "0.95vw",
  padding: "0 2.2vw",
  color: "#6A7682",
});

const getMenuListStyle = (base) => ({
  ...base,
  padding: 0,
  borderRadius: "8px",
});

const getOptionStyle = (base, leftIcon, { isSelected, isFocused }) => ({
  ...base,
  fontSize: "0.95vw",
  color: "#000000",
  backgroundColor:
    isSelected || isFocused ? "var(--color-secondary)" : undefined,
  padding: leftIcon ? "0.5vw 2.2vw" : "0.5vw 0.521vw",
  ":active": {
    backgroundColor: "var(--color-secondary)",
  },
});

const Dropdown = ({
  disabled,
  leftIcon,
  defaultValue = {},
  options = [],
  ...props
}) => {
  const [values, setValues] = useState(null);
  useEffect(() => {
    if (defaultValue && defaultValue.value !== undefined) {
      const selected = options.find((op) => op.value === defaultValue.value);
      selected && onChange(selected);
    }
  }, [JSON.stringify(defaultValue), JSON.stringify(options)]);

  const onChange = (e) => {
    setValues(e);
    props.onChange && props.onChange(e);
  };

  return (
    <div style={disabled ? { opacity: "0.5" } : {}}>
      <div className={classes.InputIconWrapper}>
        {leftIcon && <div className={classes.LeftIconWrapper}>{leftIcon}</div>}
        <Select
          isDisabled={disabled}
          value={values}
          options={options}
          components={{
            Option: CustomOption,
          }}
          styles={{
            control: getControlStyle,
            valueContainer: getValueContainerStyle,
            input: (base) => getInputStyle(base, props.size, leftIcon),
            singleValue: (base) => getSignleValue(base, leftIcon),
            placeholder: getPlaceholderStyle,
            menuList: getMenuListStyle,
            option: (base, rest) => getOptionStyle(base, leftIcon, rest),
          }}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Dropdown;

import { COUNTRY_CODES } from "../../../constants";
import Select, { components } from "react-select";
import classes from "./index.module.css";
import { useField } from "formik";
import { useEffect } from "react";
import { useState } from "react";

const getCountryCodeDropdownOptions = () => {
  const options = COUNTRY_CODES.map((detail) => ({
    label: `${detail.dial_code} ${detail.name}`,
    value: detail.dial_code,
  }));
  return options;
};

const getOptionStyle = (base, { isSelected, isFocused }) => ({
  ...base,
  color: "#000000",
  backgroundColor:
    isSelected || isFocused ? "var(--color-secondary)" : undefined,
  padding: "0.5vw 0.5vw",
  ":active": {
    backgroundColor: "var(--color-secondary)",
  },
});

const customSingleValue = ({ data, ...rest }) => {
  return (
    <components.SingleValue {...rest}>{data.value}</components.SingleValue>
  );
};

const getControlStyle = (base) => ({
  ...base,
  background: "transparent",
  borderRadius: "8px",
  border: "none",
  boxShadow: "none",
  "&:hover": {
    border: "none",
  },
});

const getMenuStyle = (base) => ({
  ...base,
  width: "auto",
});

const getMenuListStyle = (base) => ({
  ...base,
  padding: 0,
  borderRadius: "8px",
});

const PhoneNumberComponent = ({
  inputName = "",
  countryCodeName = "",
  defaultCountryCode = {},
  ...props
}) => {
  const [values, setValues] = useState({});
  const [inputFeild, inputMeta] = useField(inputName);
  const [, countryMeta, countryHelpers] = useField(countryCodeName);
  const countryCodeOptions = getCountryCodeDropdownOptions();

  useEffect(() => {
    const selected = countryCodeOptions.find(
      (op) => op.value === defaultCountryCode.value
    );
    selected ? onChange(selected) : onChange(countryCodeOptions[0]);
  }, [JSON.stringify(defaultCountryCode)]);

  const onChange = (e) => {
    setValues(e);
    countryHelpers.setValue && countryHelpers.setValue(e.value);
  };

  return (
    <div>
      <div
        className={classes.ParentWrapper}
        {...props}
        style={props.size === "large" ? { height: "3vw" } : {}}
      >
        <Select
          options={countryCodeOptions}
          value={values}
          components={{
            SingleValue: customSingleValue,
            IndicatorSeparator: () => null,
          }}
          styles={{
            control: getControlStyle,
            menu: getMenuStyle,
            option: getOptionStyle,
            menuList: getMenuListStyle,
          }}
          onChange={onChange}
        />
        <div className={classes.InputWrapper}>
          <input className={classes.Input} {...inputFeild} {...props} />
        </div>
      </div>
      {countryMeta.touched && countryMeta.error ? (
        <div className="error-msg">{countryMeta.error}</div>
      ) : null}
      {inputMeta.touched && inputMeta.error ? (
        <div className="error-msg">{inputMeta.error}</div>
      ) : null}
    </div>
  );
};

export default PhoneNumberComponent;

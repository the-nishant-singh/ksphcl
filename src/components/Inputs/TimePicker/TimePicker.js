import React from "react";
import TimePicker from "react-time-picker";
import classes from "./TimePicker.module.css";
function CustomTimePicker({
  disableClock = true,
  setStartTime,
  setEndTime,
  startTime,
  endTime,
  type,
  disabled,
  style = {},
  ...props
}) {
  return (
    <div>
      <div className={classes.TimeContainer} style={style}>
        {type == "start" ? (
          <div
            className={classes.Time}
            style={disabled ? { opacity: "0.5" } : {}}
          >
            <TimePicker
              disableClock={disableClock}
              onChange={setStartTime}
              value={startTime}
              disabled={disabled}
            />
          </div>
        ) : (
          <div
            className={classes.Time}
            style={disabled ? { opacity: "0.5" } : {}}
          >
            <TimePicker
              disableClock={disableClock}
              onChange={setEndTime}
              value={endTime}
              disabled={disabled}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomTimePicker;

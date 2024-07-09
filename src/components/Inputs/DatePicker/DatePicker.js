import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import classes from "./DatePicker.module.css";
import ModalComponent from "../../ModalComponent/ModalComponent";
import moment from "moment";
import { UilSchedule } from "@iconscout/react-unicons";
const DatePicker = ({
  date,
  setDate,
  disabled,
  showArrow = false,
  ...props
}) => {
  const [showCalender, setShowCalender] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    setCurrentDate(date);
  }, [date]);

  const handleSelect = (date) => {
    const currentDate = new Date();
    date.setHours(currentDate.getHours());
    date.setMinutes(currentDate.getMinutes());
    date.setSeconds(currentDate.getSeconds());
    setDate(date);
    setCurrentDate(date);
    setShowCalender(false);
  };
  const handleBackClick = () => {
    const previousDay = new Date(date);
    previousDay.setDate(previousDay.getDate() - 1);
    setDate(previousDay);
    setCurrentDate(previousDay);
  };

  const handleNextClick = () => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay);
    setCurrentDate(nextDay);
  };

  const style = {
    opacity: disabled && "0.5",
    height: showArrow && "2Vh",
  };

  return (
    <div>
      <div
        className={classes.DatePickerContainer}
        style={disabled ? { opacity: "0.5" } : {}}
      >
        {showArrow && (
          <div
            className={classes.ArrowButton}
            onClick={() => !disabled && handleBackClick()}
          >
            {"<"}
          </div>
        )}
        <div
          className={classes.DateContainer}
          onClick={() => !disabled && setShowCalender(!showCalender)}
          style={showArrow ? { height: "2vw" } : {}}
        >
          <div className={classes.Date}>
            {currentDate && moment(currentDate).format("MMMM DD YYYY")}
          </div>
          <div className={classes.CalendarIcon}>
            <UilSchedule
              style={{ color: "var(--color-primary)" }}
              size={"1.3vw"}
            />
          </div>
        </div>
        {showArrow && (
          <div
            className={classes.ArrowButton}
            onClick={() => !disabled && handleNextClick()}
          >
            {">"}
          </div>
        )}
      </div>

      {showCalender && (
        <ModalComponent isOpen={showCalender} setOpen={setShowCalender}>
          <Calendar
            className={classes.CalendarPopUp}
            date={date}
            onChange={handleSelect}
            autoFocus={false}
            color="var(--color-primary)"
            fixedHeight={true}
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default DatePicker;

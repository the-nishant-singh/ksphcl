import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import classes from "./DateRangePicker.module.css";
import ModalComponent from "../../ModalComponent/ModalComponent";
import moment from "moment";
import { UilSchedule } from "@iconscout/react-unicons";

const DateRange = ({
  startDate,
  onChange,
  disabled,
  endDate,
  dateFormat = null,
  ...props
}) => {
  const [showCalender, setShowCalender] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  ]);

  const handleSelect = (date) => {
    setDateRange(date);
    onChange(date[0]);

    if (new Date(date[0].startDate) < new Date(date[0].endDate)) {
      setShowCalender(false);
    }
  };

  return (
    <div>
      <div
        className={classes.DatePickerContainer}
        style={disabled ? { opacity: "0.5" } : {}}
      >
        <div
          className={classes.DateContainer}
          onClick={() => !disabled && setShowCalender(!showCalender)}
        >
          <div className={classes.Date}>
            {startDate && moment(startDate).format("MMMM DD")}
          </div>
          {">"}
          <div className={classes.Date}>
            {endDate && moment(endDate).format("MMMM DD")}
          </div>
          <div className={classes.CalendarIcon}>
            <UilSchedule
              style={{ color: "var(--color-primary)" }}
              size={"1.042vw"}
            />
          </div>
        </div>
      </div>

      {showCalender && (
        <ModalComponent isOpen={showCalender} setOpen={setShowCalender}>
          <DateRangePicker
            onChange={(item) => handleSelect([item.selection])}
            months={1}
            direction="vertical"
            scroll={{ enabled: true }}
            ranges={dateRange}
            rangeColors={["var(--color-primary)"]}
            showDateDisplay={false}
            staticRanges={[]}
            inputRanges={[]}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            preventSnapRefocus={true}
            calendarFocus="backwards"
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default DateRange;

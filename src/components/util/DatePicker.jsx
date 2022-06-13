import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { updateStartDate, updateEndDate } from "../../store/action.js";

export function DatePickerCmp() {
  const dispatch = useDispatch();
  const currStartDate = useSelector((state) => state.currencyModule.startDate);
  const currEndDate = useSelector((state) => state.currencyModule.endDate);
  const [startDate, setStartDate] = useState(new Date(currStartDate));
  const [endDate, setEndDate] = useState(new Date(currEndDate));

  useEffect(() => {
    setStartDate(new Date(currStartDate));
    setEndDate(new Date(currEndDate));
  }, []);

  const onSetDate = (type, value) => {
    if (type === "start") {
      dispatch(updateStartDate(value.toISOString().slice(0, 10)));
      setStartDate(new Date(value));
    } else {
      dispatch(updateEndDate(value.toISOString().slice(0, 10)));
      setEndDate(new Date(value));
    }
  };

  return (
    <div className="date-picker flex space-between">
      <div>
        <h4>Start Date</h4>
        <DatePicker
          className="btn"
          selected={startDate}
          onChange={(date) => onSetDate("start", date)}
        />
      </div>
      <div>
        <h4>End Date</h4>
        <DatePicker
          className="btn"
          selected={endDate}
          onChange={(date) => onSetDate("end", date)}
        />
      </div>
    </div>
  );
}

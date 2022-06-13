import React, { Fragment } from "react";
//CMPS
import { DatePickerCmp } from "../components/util/DatePicker.jsx";
import { CurrencyExchange } from "../components/CurrencyExchange.jsx";
import { Chart } from "../components/util/Chart.jsx"

export function USD_GBP() {

  return (
  <Fragment>
    <h2 className="page-title">USD/GBP</h2>
    <DatePickerCmp />
    <CurrencyExchange />
    <Chart />
  </Fragment>
  );
}

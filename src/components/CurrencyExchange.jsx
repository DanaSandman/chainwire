import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getRangeEx } from "../store/action.js";

export function CurrencyExchange() {
  const dispatch = useDispatch();
  const { startDate } = useSelector((state) => state.currencyModule);
  const { endDate } = useSelector((state) => state.currencyModule);
  const [currCurrency, setCurrCurrency] = useState({});

  useEffect(() => {
    let currency = window.location.href.slice(-7);
    if (currency === "eur_usd") {
      currency = {
        base_currency: "EUR",
        currencies: "USD",
      };
    } else {
      currency = {
        base_currency: "USD",
        currencies: "GBP",
      };
    }
    setCurrCurrency(currency);
    onGetRangeEx();
  }, []);

  useEffect(() => {
    onGetRangeEx();
  }, [currCurrency]);

  const onGetRangeEx = () => {
    const exParams = {
      _startDate: startDate,
      _endDate: endDate,
      _baseCurrency: currCurrency.base_currency,
      _currencies: currCurrency.currencies,
    };
    dispatch(getRangeEx(exParams));
  };

  return (
    <div className="CurrencyExchange">
      <button className="btn submit-btn" onClick={onGetRangeEx}>
        Submit
      </button>
    </div>
  );
}

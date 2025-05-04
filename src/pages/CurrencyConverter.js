import React, { useState, useEffect } from "react";
import "../styles/converter.css";

const exchangeRates = {
  USD: { EUR: 0.85, INR: 75.0, GBP: 0.75, JPY: 110.0 },
  EUR: { USD: 1.18, INR: 88.0, GBP: 0.88, JPY: 129.0 },
  INR: { USD: 0.013, EUR: 0.012, GBP: 0.010, JPY: 1.45 },
  GBP: { USD: 1.33, EUR: 1.14, INR: 98.0, JPY: 145.0 },
  JPY: { USD: 0.0091, EUR: 0.0078, INR: 0.69, GBP: 0.0069 },
};

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Reset toCurrency when fromCurrency changes
    if (exchangeRates[fromCurrency]) {
      const availableTargets = Object.keys(exchangeRates[fromCurrency]);
      setToCurrency(availableTargets[0]);
    }
  }, [fromCurrency]);

  const handleConversion = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      setConvertedAmount(null);
      return;
    }

    const rate =
      exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency];

    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
      setError("");
    } else {
      setError("Conversion not available for selected currencies.");
      setConvertedAmount(null);
    }
  };

  return (
    <div className="currency-converter-page">
      <h1>🌍 Travel Currency Converter</h1>
      <p>Convert your expenses in real-time with quick rates.</p>

      <div className="converter-box">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          placeholder="Enter amount"
        />

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>

        <span className="arrow">→</span>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {exchangeRates[fromCurrency] &&
            Object.keys(exchangeRates[fromCurrency]).map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
        </select>
      </div>

      <button onClick={handleConversion}>Convert</button>

      {error && <p className="error">{error}</p>}

      {convertedAmount !== null && (
        <h2 className="result">
          {amount} {fromCurrency} ={" "}
          <strong>
            {convertedAmount} {toCurrency}
          </strong>
        </h2>
      )}
    </div>
  );
}

export default CurrencyConverter;

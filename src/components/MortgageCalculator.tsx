"use client";

import React, { useState } from "react";

function calculateMonthlyMortgage(
  P: number,
  annualRate: number,
  years: number,
): number {
  const r = annualRate / 12 / 100;
  const n = years * 12;

  if (r === 0) return P / n;

  const numerator = P * r * Math.pow(1 + r, n);
  const denominator = Math.pow(1 + r, n) - 1;

  return numerator / denominator;
}

export const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    totalPrice: "",
    downPaymentPercent: "",
    interestRate: "",
    loanPeriod: "",
  });

  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const formatNumber = (value: string) => {
    const numericValue = value.replace(/,/g, "");
    if (!numericValue) return "";
    return parseFloat(numericValue).toLocaleString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Remove commas before validation
    let numericValue = value.replace(/,/g, "");

    if (name === "downPaymentPercent") {
      // Limit down payment % to 100
      let num = parseFloat(numericValue);
      if (num > 100) num = 100;
      numericValue = num.toString();
    }

    setFormData({
      ...formData,
      [name]: name === "totalPrice" ? formatNumber(value) : numericValue,
    });
  };

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const total = parseFloat(formData.totalPrice.replace(/,/g, ""));
    const downPercent = parseFloat(formData.downPaymentPercent);
    const rate = parseFloat(formData.interestRate);
    const period = parseInt(formData.loanPeriod);

    if (
      total > 0 &&
      downPercent >= 0 &&
      rate >= 0 &&
      period > 0 &&
      downPercent <= 100
    ) {
      const downPaymentAED = (downPercent / 100) * total;
      const loanAmount = total - downPaymentAED;

      const result = calculateMonthlyMortgage(loanAmount, rate, period);
      setMonthlyPayment(result);
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <section id="mortgage-calc" className="sec-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-uppercase">Mortgage calculator</h2>
            <p>Easily estimate/calculate your monthly mortgage repayments</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <form onSubmit={handleCalculate}>
              <div className="row">
                <div className="col-md-3">
                  <label
                    htmlFor="totalPrice"
                    className="form-label text-uppercase fw-medium"
                  >
                    Total price (AED)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="totalPrice"
                    name="totalPrice"
                    value={formData.totalPrice}
                    onChange={handleChange}
                    placeholder="1,000,000"
                  />
                </div>

                <div className="col-md-3">
                  <label
                    htmlFor="downPaymentPercent"
                    className="form-label text-uppercase fw-medium"
                  >
                    Down payment (%)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="downPaymentPercent"
                    name="downPaymentPercent"
                    value={formData.downPaymentPercent}
                    onChange={handleChange}
                    placeholder="25"
                    step="0.01"
                    max={100}
                  />
                </div>

                <div className="col-md-3">
                  <label
                    htmlFor="interestRate"
                    className="form-label text-uppercase fw-medium"
                  >
                    Interest rate (% annually)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="interestRate"
                    name="interestRate"
                    value={formData.interestRate}
                    onChange={handleChange}
                    placeholder="3.5"
                    step="0.01"
                  />
                </div>

                <div className="col-md-3">
                  <label
                    htmlFor="loanPeriod"
                    className="form-label text-uppercase fw-medium"
                  >
                    Loan period (years)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="loanPeriod"
                    name="loanPeriod"
                    value={formData.loanPeriod}
                    onChange={handleChange}
                    placeholder="25"
                  />
                </div>
              </div>

              <div className="row mt-lg-5 mt-md-5 mt-3">
                <div className="mortgage-bottom-box col-md-12 d-flex align-items-center justify-content-between">
                  <div className="estimated">
                    <p>Monthly Payments</p>
                    <h2 className="text-uppercase">
                      {monthlyPayment !== null
                        ? `AED ${monthlyPayment.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })} / Month`
                        : "—"}
                    </h2>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Calculate Mortgage
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

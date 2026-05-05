"use client";
import SectionHeading from "@/components/SectionHeading";
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
    <section className="mortgage-calc-sec sec-padding" id="mortgage-calc" >
      <svg className="mortgageshape" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="1919" height="770" viewBox="0 0 1919 770" fill="none">
        <path d="M1919 0V670C1919 725.228 1874.23 770 1819 770H1418.12H0V132.568C0 110.477 17.9086 92.5682 40 92.5682H1287.11H1381.1C1397.87 92.5682 1413.19 83.0312 1420.59 67.9776L1441.91 24.5906C1449.31 9.53705 1464.63 0 1481.4 0H1919Z" fill="#F6F6F6" />
      </svg>
      <div className="container position-relative">
        <div className="sec-title --is-medium has-spacing">
          <SectionHeading text="Estimate your mortgage and monthly payments instantly." />
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <form className="mortgage-form" onSubmit={handleCalculate}>
              <div className="row">
                <div className="col-md-3">
                  <label
                    htmlFor="totalPrice"
                    className="form-label text-uppercase fw-medium"
                  >
                    total price
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="totalPrice"
                      name="totalPrice"
                      value={formData.totalPrice}
                      onChange={handleChange}
                      placeholder="1,000,000"
                    />
                    <span>AED</span>
                  </div>
                </div>

                <div className="col-md-3">
                  <label
                    htmlFor="downPaymentPercent"
                    className="form-label text-uppercase fw-medium"
                  >
                    Down payment
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      id="downPaymentPercent"
                      name="downPaymentPercent"
                      value={formData.downPaymentPercent}
                      onChange={handleChange}
                      placeholder="25"
                      step="0.01"
                      max={100}
                    />
                    <span>%</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="loanPeriod"
                    className="form-label text-uppercase fw-medium"
                  >
                    Loan period
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      id="loanPeriod"
                      name="loanPeriod"
                      value={formData.loanPeriod}
                      onChange={handleChange}
                      placeholder="25"
                    />
                    <span>YEARS</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <label
                    htmlFor="interestRate"
                    className="form-label text-uppercase fw-medium"
                  >
                    Interest rate
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      id="interestRate"
                      name="interestRate"
                      value={formData.interestRate}
                      onChange={handleChange}
                      placeholder="3.5"
                      step="0.01"
                    />
                    <span>%</span>
                  </div>
                </div>
              </div>
              <div className="row mt-lg-5 mt-md-5 mt-3">
                <div className="mortgage-bottom-box col-md-12 d-md-flex align-items-center justify-content-between">
                  <div className="estimated">
                    <p className="text-uppercase result-title fw-medium">Monthly Payments</p>
                    <h2 className="text-uppercase result-value fw-bold">
                      {monthlyPayment !== null
                        ? `AED ${monthlyPayment.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}`
                        : "—"}
                    </h2>
                  </div>
                  <button type="submit" className="butn butn-primary-filled">
                    Get Free Consultation
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

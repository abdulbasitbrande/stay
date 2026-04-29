"use client";
import React, { useState } from "react";
import Link from "next/link";

type VariantType = 1 | 2;

interface MortgageCalculatorFormProps {
  variant: VariantType;
}

interface FormData {
  tprice: string;
  dpayment: string;
  interestRate: string;
  loanPeriod: string;
}

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

const MortgageCalculatorForm: React.FC<MortgageCalculatorFormProps> = ({
  variant,
}) => {
  const [formData, setFormData] = useState<FormData>({
    tprice: "",
    dpayment: "",
    interestRate: "",
    loanPeriod: "",
  });

  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalLoan, setTotalLoan] = useState<number | null>(null);

  const formatNumber = (value: string): string => {
    const numericValue = value.replace(/,/g, "");
    if (!numericValue) return "";
    return parseFloat(numericValue).toLocaleString();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let numericValue = value.replace(/,/g, "");

    if (name === "dpayment") {
      let num = parseFloat(numericValue);
      if (num > 100) num = 100;

      setFormData((prev) => ({
        ...prev,
        dpayment: isNaN(num) ? "" : num.toString(),
      }));
      return;
    }

    if (name === "tprice") {
      setFormData((prev) => ({
        ...prev,
        tprice: formatNumber(value),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  const handleCalculate = () => {
    const total = parseFloat(formData.tprice.replace(/,/g, ""));
    const downPercent = parseFloat(formData.dpayment);
    const rate = parseFloat(formData.interestRate);
    const period = parseInt(formData.loanPeriod);

    if (
      total > 0 &&
      downPercent >= 0 &&
      rate >= 0 &&
      period > 0 &&
      downPercent <= 100
    ) {
      const downPayment = (downPercent / 100) * total;
      const loanAmount = total - downPayment;

      const result = calculateMonthlyMortgage(loanAmount, rate, period);

      setMonthlyPayment(result);
      setTotalLoan(loanAmount);
    } else {
      setMonthlyPayment(null);
      setTotalLoan(null);
    }
  };

  return (
    <form
      className={`mortgage-box variant-${variant}`}
      onSubmit={(e) => {
        e.preventDefault();
        handleCalculate();
      }}
    >
      {variant === 1 && <h4 className="calc-title">CALCULATE YOUR MORTGAGE</h4>}

      <div className="row g-4">
        <div className="col-md-6">
          <label>TOTAL PRICE {variant === 2 && "(AED)"}</label>
          <div className="calc-input">
            <input
              type="text"
              name="tprice"
              value={formData.tprice}
              onChange={handleChange}
              placeholder="3,000,000"
            />
            {variant === 1 && <span>AED</span>}
          </div>
        </div>

        <div className="col-md-6">
          <label>DOWN PAYMENT {variant === 2 && "(%)"}</label>
          <div className="calc-input">
            <input
              type="number"
              name="dpayment"
              value={formData.dpayment}
              onChange={handleChange}
              placeholder="25"
            />
            {variant === 1 && <span>%</span>}
          </div>
        </div>

        <div className="col-md-6">
          <label>INTEREST RATE {variant === 2 && "(%)"}</label>
          <div className="calc-input">
            <input
              type="number"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
              placeholder="3.75"
            />
            {variant === 1 && <span>%</span>}
          </div>
        </div>

        <div className="col-md-6">
          <label>LOAN PERIOD {variant === 2 && "YEARLY"}</label>
          <div className="calc-input">
            <input
              type="number"
              name="loanPeriod"
              value={formData.loanPeriod}
              onChange={handleChange}
              placeholder="25"
            />
            {variant === 1 && <span>YEARS</span>}
          </div>
        </div>
      </div>

      {variant === 1 ? (
        <div className="calc-footer">
          <div>
            <p className="monthly-label">MONTHLY PAYMENTS</p>
            <h2 className="monthly-value">
              {monthlyPayment !== null
                ? `AED ${monthlyPayment.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`
                : "AED 0.00"}
            </h2>
          </div>

          <button type="submit" className="consult-btn">
            GET FREE CONSULTATION
          </button>
        </div>
      ) : (
        <div className="calc-footer variant-2-footer">
          <button type="submit" className="consult-btn">
            GET FREE CONSULTATION
          </button>

          <div className="text-end">
            <p className="monthly-label">MONTHLY PAYMENTS</p>
            <h2 className="monthly-value">
              {monthlyPayment !== null
                ? `AED ${monthlyPayment.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}`
                : "AED 0.00"}
            </h2>
          </div>
        </div>
      )}
    </form>
  );
};

export default MortgageCalculatorForm;

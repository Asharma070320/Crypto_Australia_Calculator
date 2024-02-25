import { useState } from "react";
import "./Calc.css";

const Calc = () => {
  const [pur, setPur] = useState(0);
  const [sel, setSel] = useState(0);
  const [exp, setExp] = useState(0);
  const [capitalGainAmount, setCapitalGainAmount] = useState(0);

  const getpurchaseprice = (e) => {
    setPur(e.target.value);
    //  setCapitalGainAmount(pur)
  };

  const getsellprice = (e) => {
    setSel(e.target.value);
  };

  const getexpenses = (e) => {
    setExp(e.target.value);
  };

  console.log(pur, sel, exp);

  const [shortTermDisabled, setShortTermDisabled] = useState(false);
  const [longTermDisabled, setLongTermDisabled] = useState(false);

  const shortBtn = () => {
    setShortTermDisabled(true);
    setLongTermDisabled(false);
  };

  const longBtn = () => {
    setShortTermDisabled(false);
    setLongTermDisabled(true);
  };

  // const [annualIncome, setAnnualIncome] = useState(45001);
  // const getAnnualIncome = (e) => {
  //   console.log(e.target.value);
  //   setAnnualIncome(e.target.value);
  // };

  const calculateCapitalGain = () => {
    const capitalGain = pur - sel - exp;
    setCapitalGainAmount(capitalGain);
  };

  const [selectedValue, setSelectedValue] = useState("$5902");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // console.log(selectedValue);

  const getTaxRate = () => {
    switch (selectedValue) {
      case "$0":
        return "0%";
      case "$18,200":
        return "19%";
      case "$45,000":
        return "32.5%";
      case "$120,000":
        return "37%";
      case "$180,000":
        return "45%";
      default:
        return "0%";
    }
  };

  return (
    <div className="container">
      <h2 className="centerTxt">Free Crypto Tax Calculator Australia</h2>

      {/* Select the Year in this part  */}
      <div className="year_Country">
        <div className="financial_Year">
          <p className="aside">Financial Year</p>
          <input className="big" type="number" />
        </div>
        <div className="country">
          <p className="aside">Country :-</p>
          <img
            className="setFlagImg"
            src="https://media.istockphoto.com/id/1340727526/vector/flags-of-australia-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=tyL_HkGKsFGnwMh41AdnfXSke7BlUaVNJewEgWzDYLQ="
            alt="Australia.png"
          />{" "}
          <span className="bold">Australia</span>
        </div>
      </div>

      {/* line */}
      <div className="line"></div>

      {/* purchase and sale part */}
      <div className="purchase_Sale">
        <div>
          <p className="grey_color">Enter purchase price of Crypto</p>
          <input
            className="inp_pur_sale"
            type="number"
            placeholder="Enter the purchase price"
            onChange={getpurchaseprice}
          />
        </div>
        <div>
          <p className="grey_color">Enter sale price of Crypto</p>
          <input
            className="inp_pur_sale"
            type="number"
            placeholder="Enter the sell price"
            onChange={getsellprice}
          />
        </div>
      </div>

      {/* Expenses and the investment part */}
      <div className="expenses_investment">
        <div className="set_expenses">
          <p className="grey_color">Enter your Expenses</p>
          <input
            className="inp_exp_inv"
            type="number"
            placeholder="Expenses"
            onChange={getexpenses}
          />
        </div>
        <div className="set_months">
          <p className="grey_color">Investment Type</p>

          <button
            className={`small_Inp ${shortTermDisabled ? "disabled" : ""}`}
            onClick={shortBtn}
            disabled={shortTermDisabled}
          >
            Short Term
          </button>

          <button
            className={`small_Inp ${longTermDisabled ? "disabled" : ""}`}
            onClick={longBtn}
            disabled={longTermDisabled}
          >
            Long Term
          </button>
          <div className="years">
            <div className="arrow_left">
              <i class="ri-arrow-left-s-line"></i>
              <p className="grey_color">12 Months</p>
            </div>
            <div className="arrow_right">
              <i class="ri-arrow-right-s-line"></i>
              <p className="grey_color">12 Months</p>
            </div>
          </div>
        </div>
      </div>

      {/* Annual income part */}
      <div className="annual_Income">
        <div className="ann_income">
          <p className="grey_color">Select Your Annual Income</p>
          <select
            className="select"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="$0">$0 - $18,200</option>
            <option value="$18,200">$18,201 - $45,000</option>
            <option value="$45,000">$240,000 - $360,000</option>
            <option value="$120,000">$360,000 - $480,000</option>
            <option value="$180,000">$480,000 - $560,000</option>
          </select>
        </div>
        <div className="tax">
          <p className="grey_color" style={{ marginTop: "3px" }}>
            Tax Rate
          </p>
          <p className="grey_color">
            $ 5,902 - {getTaxRate()} of excess over {selectedValue}
          </p>
        </div>
      </div>

      {/* gain and discount part */}
      <div className="gain_discount">
        <div className="gains">
          <p className="grey_color">Capital gains amount</p>
          {/* <input className="inp_gains" type="text" onChange={getupadatedVal} placeholder={total} value={total} /> */}
          <p className="setWidth">${sel - pur - exp}</p>
        </div>
        <div className="discount">
          <p className="grey_color">Discount for long term gains</p>
          {/* <input type="text" className="inp_discount" /> */}
          <p className="setWidth">${(sel - pur - exp) / 2}</p>
        </div>
        {/* <button onClick={calculateCapitalGain}>click here</button> */}
      </div>

      {/* Final Part */}
      <div className="tax_amount_pay">
        <div className="tax_amount">
          <p>Net Capital gains tax amount</p>
          <h2 className="green_color">$2,500</h2>
        </div>
        <div className="tax_pay">
          <p>The tax you need to pay*</p>
          <h2 className="blue_color">$812.5</h2>
        </div>
      </div>
    </div>
  );
};

export default Calc;

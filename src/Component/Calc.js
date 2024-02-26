import { useEffect, useState } from "react";
import "./Calc.css";

const Calc = () => {
  const [pur, setPur] = useState(0);
  const [sel, setSel] = useState(0);
  const [exp, setExp] = useState(0);
  const [capitalGainsAmount, setCapitalGainsAmount] = useState(0);
  const [taxrate, setTaxRate] = useState("");
  const [capitalGainAmount, setCapitalGainAmount] = useState(0);
  const [longTermGainsDiscount, setLongTermGainsDiscount] = useState(0);
  const [selectedValue, setSelectedValue] = useState(45001);
  const [investmenttype, setInvestementType] = useState("Long Term");
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [taxToPay, setTaxToPay] = useState(0);


  useEffect(()=> {

    const gains = sel - pur - exp;
    console.log(gains);
    setCapitalGainsAmount(gains);

  // console.log(pur, sel, exp);

  

  // const shortBtn = () => {
  //   setShortTermDisabled(true);
  //   setLongTermDisabled(false);
  // };

  // const longBtn = () => {
  //   setShortTermDisabled(false);
  //   setLongTermDisabled(true);
  // };

  // const [annualIncome, setAnnualIncome] = useState(45001);
  // const getAnnualIncome = (e) => {
  //   console.log(e.target.value);
  //   setAnnualIncome(e.target.value);
  // };

  


  // const handleSelectChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  // console.log(selectedValue);

  const calculateTaxRate = () => {
    
    // console.log(selectedValue)
    if (selectedValue >= 180001) {
      return "$51,667 + 45.5% of excess over $180,000";
    } else if (selectedValue >= 120001) {
      return "$29,467 + 37% of excess over $120,000";
    } else if (selectedValue >= 45001) {
      return "$5,092 + 32.5% of excess over $45,000";
    } else if (selectedValue >= 18201) {
      return "Nil + 19% of excess over $18,200";
    } else {
      return "0%";
    }
  };

  setTaxRate(calculateTaxRate);

  if (investmenttype === "Long Term" && gains > 0) {
    setLongTermGainsDiscount(gains * 0.5);
  } else {
    setLongTermGainsDiscount(0);
  }

  // console.log(longTermGainsDiscount, capitalGainAmount);
  if (investmenttype === "Long Term") {
    setNetCapitalGains(gains - parseFloat(longTermGainsDiscount));
  } else {
    setNetCapitalGains(gains);
  }

  const calculateTaxToPay = () => {
    debugger;
    const taxRateParts = taxrate.match(/([\d.]+)%/);
    if (taxRateParts) {
    let percentPart = taxRateParts ? parseFloat(taxRateParts[1]) : "0";
     percentPart = percentPart / 100;
     console.log("percentPart => ", percentPart)
    if (selectedValue >= 180001) {
      let newRes =  (netCapitalGains * percentPart).toFixed(2);
      return newRes;
    } else if (selectedValue >= 120001) {
        let newRes =  (netCapitalGains * percentPart).toFixed(2);
        return newRes;
    } else if (selectedValue >= 45001) {
        let newRes =  (netCapitalGains * percentPart).toFixed(2);
        return newRes;
    } else if (selectedValue >= 18201) {
        let newRes =  (netCapitalGains * percentPart).toFixed(2);
        return newRes;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};

setTaxToPay(calculateTaxToPay());
  

}, [taxrate,pur,exp,sel,capitalGainAmount,selectedValue, investmenttype, capitalGainsAmount, longTermGainsDiscount])
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
            onChange={(e)=>setPur(e.target.value)}
          />
        </div>
        <div>
          <p className="grey_color">Enter sale price of Crypto</p>
          <input
            className="inp_pur_sale"
            type="number"
            placeholder="Enter the sell price"
            onChange={(e)=> setSel(e.target.value)}
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
            onChange={(e)=> setExp(e.target.value)}
          />
        </div>
        <div className="set_months">
          <p className="grey_color">Investment Type</p>

          <button
           className={investmenttype === "Short Term" ? "active" : ""}
           onClick={() => setInvestementType("Short Term")}
          >
            Short Term
          </button>

          <button
             className={investmenttype === "Long Term" ? "active" : ""}
             onClick={() => setInvestementType("Long Term")}
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
            onChange={(e)=> setSelectedValue(e.target.value)}
          >
          <option value={0}>$0 - $18,200</option>
            <option value={18201}>$18,201 - $45,000</option>
            <option value={45001}>$45,001 - $120,000</option>
            <option value={120001}>$120,001 - $180,000</option>
            <option value={180001}>$180,001+</option>
          </select>
        </div>
        <div className="tax">
          <p className="grey_color" style={{ marginTop: "3px" }}>
            Tax Rate
          </p>
          <p className="grey_color">
            {taxrate}
          </p>
        </div>
      </div>

      {/* gain and discount part */}
     {
      investmenttype== "Long Term" && (
        <div className="gain_discount">
        <div className="gains">
          <p className="grey_color">Capital gains amount</p>
          {/* <input className="inp_gains" type="text" onChange={getupadatedVal} placeholder={total} value={total} /> */}
          <p className="setWidth">{ sel - pur - exp}</p>
        </div>
        <div className="discount">
          <p className="grey_color">Discount for long term gains</p>
          {/* <input type="text" className="inp_discount" /> */}
          <p className="setWidth">{ longTermGainsDiscount}</p>
        </div>
        {/* <button onClick={calculateCapitalGain}>click here</button> */}
      </div>
      )
     }

      {/* Final Part */}
      <div className="tax_amount_pay">
        <div className="tax_amount">
          <p>Net Capital gains tax amount</p>
          <h2 className="green_color">{netCapitalGains}</h2>
        </div>
        <div className="tax_pay">
          <p>The tax you need to pay*</p>
          <h2 className="blue_color">{taxToPay}</h2>
        </div>
      </div>
    </div>
  );
};

export default Calc;
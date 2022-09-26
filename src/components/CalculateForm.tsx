import { useState } from "react";
import "./CalculateForm.css";
import sad from "../icons/sad.svg";
import smile from "../icons/smile.svg";
// import background from "../icons/forest-backgroundImage.jpg"
const CalculateForm = () => {
  const [writeOfForTheLastMonth, setWriteOfTheLastMonth] = useState(0);
  const [unpaidAmountsForPreviousMonths, setUnpaidAmountsForPreviousMonths] =
    useState(0);
  const [result, setResult] = useState(0);

  const handleWriteOfAugust = (event: any) => {
    setWriteOfTheLastMonth(event.target.value);
  };

  const handleUnpaidAmount = (event: any) => {
    setUnpaidAmountsForPreviousMonths(event.target.value);
  };

  const calculate = () => {
    const calculateFubction =
      -writeOfForTheLastMonth + +unpaidAmountsForPreviousMonths;
    // const calculateFubction = unpaidAmounts - writeOfAugust
    setResult(calculateFubction);
  };

  const emoteSmile = result > 0 ? <img src={smile} alt="smile icon" /> : null;

  const emoteSad = result < 0 ? <img src={sad} alt="sad icon" /> : null;

  return (
    <div className="calculate-wrapper">
      <div className="calculate-form">
        <h1>Full amount for August : 275 PLN</h1>
        <label>write-off for the last month: </label>
        <input
          type="number"
          value={writeOfForTheLastMonth}
          onChange={handleWriteOfAugust}
        />
        <label>Unpaid amounts for previous months: </label>
        <input
          type="number"
          value={unpaidAmountsForPreviousMonths}
          onChange={handleUnpaidAmount}
        />
        <button onClick={calculate}>Calculate</button>
        <br />
        <div className="result-container">
          <h1 className="result">
            {emoteSmile} {emoteSad} {result}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CalculateForm;

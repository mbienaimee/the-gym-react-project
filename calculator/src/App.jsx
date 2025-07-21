import React, { useState } from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import "./index.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "x":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const inputOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const percentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const toggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(-value));
  };

  const clearAll = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const inputDecimal = () => {
    if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display value={display} />

        <div className="button-grid">
          {/* Row 1 */}
          <Button onClick={clearAll} className="btn-utility" text="AC" />
          <Button onClick={toggleSign} className="btn-utility" text="+/-" />
          <Button onClick={percentage} className="btn-utility" text="%" />
          <Button
            onClick={() => inputOperator("÷")}
            className="btn-operator"
            text="÷"
          />

          {/* Row 2 */}
          <Button
            onClick={() => inputNumber(7)}
            className="btn-number"
            text="7"
          />
          <Button
            onClick={() => inputNumber(8)}
            className="btn-number"
            text="8"
          />
          <Button
            onClick={() => inputNumber(9)}
            className="btn-number"
            text="9"
          />
          <Button
            onClick={() => inputOperator("x")}
            className="btn-operator"
            text="x"
          />

          {/* Row 3 */}
          <Button
            onClick={() => inputNumber(4)}
            className="btn-number"
            text="4"
          />
          <Button
            onClick={() => inputNumber(5)}
            className="btn-number"
            text="5"
          />
          <Button
            onClick={() => inputNumber(6)}
            className="btn-number"
            text="6"
          />
          <Button
            onClick={() => inputOperator("-")}
            className="btn-operator"
            text="-"
          />

          {/* Row 4 */}
          <Button
            onClick={() => inputNumber(1)}
            className="btn-number"
            text="1"
          />
          <Button
            onClick={() => inputNumber(2)}
            className="btn-number"
            text="2"
          />
          <Button
            onClick={() => inputNumber(3)}
            className="btn-number"
            text="3"
          />
          <Button
            onClick={() => inputOperator("+")}
            className="btn-operator"
            text="+"
          />

          {/* Row 5 */}
          <Button
            onClick={() => inputNumber(0)}
            className="btn-number btn-zero"
            text="0"
          />
          <Button onClick={inputDecimal} className="btn-number" text="." />
          <Button
            onClick={performCalculation}
            className="btn-operator"
            text="="
          />
        </div>
      </div>
    </div>
  );
}

export default App;

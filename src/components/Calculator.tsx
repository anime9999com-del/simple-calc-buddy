import { useState } from "react";
import { Button } from "@/components/ui/button";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const inputPercent = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b !== 0 ? a / b : 0;
      default:
        return b;
    }
  };

  const handleEquals = () => {
    if (operator && previousValue !== null) {
      const inputValue = parseFloat(display);
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const formatDisplay = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return "0";
    if (value.length > 12) {
      return num.toExponential(5);
    }
    return value;
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        <span className="calculator-display-text">{formatDisplay(display)}</span>
      </div>
      
      <div className="calculator-grid">
        <Button variant="function" onClick={clear}>AC</Button>
        <Button variant="function" onClick={toggleSign}>±</Button>
        <Button variant="function" onClick={inputPercent}>%</Button>
        <Button variant="operator" onClick={() => performOperation("÷")}>÷</Button>
        
        <Button variant="digit" onClick={() => inputDigit("7")}>7</Button>
        <Button variant="digit" onClick={() => inputDigit("8")}>8</Button>
        <Button variant="digit" onClick={() => inputDigit("9")}>9</Button>
        <Button variant="operator" onClick={() => performOperation("×")}>×</Button>
        
        <Button variant="digit" onClick={() => inputDigit("4")}>4</Button>
        <Button variant="digit" onClick={() => inputDigit("5")}>5</Button>
        <Button variant="digit" onClick={() => inputDigit("6")}>6</Button>
        <Button variant="operator" onClick={() => performOperation("-")}>−</Button>
        
        <Button variant="digit" onClick={() => inputDigit("1")}>1</Button>
        <Button variant="digit" onClick={() => inputDigit("2")}>2</Button>
        <Button variant="digit" onClick={() => inputDigit("3")}>3</Button>
        <Button variant="operator" onClick={() => performOperation("+")}>+</Button>
        
        <Button variant="digit" className="col-span-2" onClick={() => inputDigit("0")}>0</Button>
        <Button variant="digit" onClick={inputDecimal}>.</Button>
        <Button variant="operator" onClick={handleEquals}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
    console.log(operators);
    const [stateOperators, setOperator] = useState(operators);
    const operatorsMapped = stateOperators.map(digits => digits.char);
    
  return (
    <div className="operatorButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {stateOperators.map(operator => (
  <OperatorButton key={operator.char} operatorsMapped={operator.char} />
  ))}
    </div>
  );
};
export default Operators;
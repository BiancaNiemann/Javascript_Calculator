import React from "react";

export default function Buttons({insertDigit, insertOperator, addSum, digit, clearScreen}) {

    return (
        
        <div className="button-container">

          <button className="clear-btn" id="clear" onClick={() => clearScreen()}>AC</button>
          <button id="divide" onClick={() => insertOperator('/')}>/</button>
          <button id="multiply" onClick={() => insertOperator('*')}>x</button>

          <button id="seven" onClick={() => insertDigit(7)}>7</button>
            <button id="eight" onClick={() => insertDigit(8)}>8</button>
            <button id="nine" onClick={() => insertDigit(9)}>9</button>
            <button id="subtract" onClick={() => insertOperator('-')}>-</button>

            <button id="four" onClick={() => insertDigit(4)}>4</button>
            <button id="five" onClick={() => insertDigit(5)}>5</button>
            <button id="six" onClick={() => insertDigit(6)}>6</button>
            <button id="add" onClick={() => insertOperator('+')}>+</button>


            <button id="one" onClick={() => insertDigit(1)}>1</button>
            <button id="two" onClick={() => insertDigit(2)}>2</button>
            <button id="three" onClick={() => insertDigit(3)}>3</button>
            <button className="equal-btn" id="equals" onClick={() => addSum(digit)}>=</button>

            <button className="zero-btn" id="zero" onClick={() => insertDigit(0)}>0</button>
            <button id="decimal" onClick={() => insertDigit('.')}>.</button>
            
        </div>

    )
}
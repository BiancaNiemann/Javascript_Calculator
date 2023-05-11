import { useState } from 'react'
import './App.css'

function App() {
  const [digit, setDigit] = useState('')
  const [total, setTotal] = useState('')
  const [operator, setOperator] = useState('')
  const [isUpdated, setIsUpdated] = useState(false)
  const [fullTotal, setFullTotal] = useState('')
  const [isTotalled, setIsTotalled] = useState(false)
  const[start, setStart] = useState(false)


  function insertOperator(e) {
    if (isUpdated === false) {
      setTotal(prevTotal => prevTotal + digit)
      setOperator(e)
    } else {
      setOperator(e)
    }
    setIsUpdated(true)
  }

  function insertDigit(e) {
    setIsUpdated(false)
    if (operator.length > 0) {
      setTotal(prevTotal => prevTotal + operator)
      setOperator('')
      setDigit('')
      setDigit(prevDigit => prevDigit + e)
    } else if (operator.length <= 0) {
      console.log(digit.at(0))
      setStart(true)
      
      setDigit(prevDigit => prevDigit + e)
      setFullTotal('')
      setIsTotalled(false)
    }
  }

  function addSum(e) {
    setIsTotalled(true)
    setTotal(prevTotal => prevTotal + e)
    setFullTotal(eval(total + e))
    setTotal('')
    setDigit('')
    setOperator('')
    setStart(false)
  }

  function clearScreen(){
    setTotal('')
    setDigit('')
    setOperator('')
    setIsUpdated(false)
    setFullTotal('')
    setStart(false)
    setIsTotalled(false)
  }


  return (
    <>
      <button id="equals" onClick={() => addSum(digit)}>=</button>
      <button id="zero" onClick={() => insertDigit(0)}>0</button>
      <button id="one" onClick={() => insertDigit(1)}>1</button>
      <button id="two" onClick={() => insertDigit(2)}>2</button>
      <button id="three" onClick={() => insertDigit(3)}>3</button>
      <button id="four" onClick={() => insertDigit(4)}>4</button>
      <button id="five" onClick={() => insertDigit(5)}>5</button>
      <button id="six" onClick={() => insertDigit(6)}>6</button>
      <button id="seven" onClick={() => insertDigit(7)}>7</button>
      <button id="eight" onClick={() => insertDigit(8)}>8</button>
      <button id="nine" onClick={() => insertDigit(9)}>9</button>
      <button id="add" onClick={() => insertOperator('+')}>+</button>
      <button id="subtract" onClick={() => insertOperator('-')}>-</button>
      <button id="multiply" onClick={() => insertOperator('*')}>x</button>
      <button id="divide" onClick={() => insertOperator('/')}>/</button>
      <button id="decimal" onClick={() => insertDigit('.')}>.</button>
      <button id="clear" onClick={()=> clearScreen()}>AC</button>
      {!isTotalled && !start && <input id="display" value='0' onChange={e => setDigit(e.target.value)} />}
      {!isTotalled && start && <input id="display" value={digit} onChange={e => setDigit(e.target.value)} />}
      {isTotalled && <input id="display" value={fullTotal} onChange={e => setDigit(e.target.value)} />}
      <div>{total}</div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [digit, setDigit] = useState('')
  const [total, setTotal] = useState('')
  const [operator, setOperator] = useState('')
  const [isUpdated, setIsUpdated] = useState(false)
  const [fullTotal, setFullTotal] = useState('')
  const [isTotalled, setIsTotalled] = useState(false)
  const[start, setStart] = useState(false)
  const [isDecimal, setIsDecimal] = useState(false)
  const [isZero, setIsZero] = useState(false)
  const [isOperator, setIsOperator] = useState(false)

  useEffect(()=> {
    if(digit.includes('.')){
      setIsDecimal(true)
    } else {
      setIsDecimal(false)
    }

    if(digit.startsWith(0)){
      setIsZero(true)
    } else {
      setIsZero(false)
    }
    
  },[digit])

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
    let selectedDigit = e

    if(e === '.' && isDecimal === false){
        selectedDigit = '.'
      } else if(e === '.' && isDecimal === true){
        selectedDigit = ''
      }else if(e === 0 && isZero === false){
        selectedDigit = 0
      } else if(e === 0 && isZero === true){
        selectedDigit = ''
      }

      setIsUpdated(false)
      if (operator.length > 0) {
        setTotal(prevTotal => prevTotal + operator)
        setOperator('')
        setDigit('')
       setDigit(prevDigit => prevDigit + selectedDigit)
      } else if (operator.length <= 0) {
        setStart(true)
        setDigit(prevDigit => prevDigit + selectedDigit)
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
      {!isTotalled && !start && <input id="display" value='0' onChange={e => checkZero(e)} />}
      {!isTotalled && start && <input id="display" value={digit} onChange={e => checkZero(e)} />}
      {isTotalled && <input id="display" value={fullTotal} onChange={e => checkZero(e)} />}
      <div>{total}</div>
    </>
  )
}

export default App

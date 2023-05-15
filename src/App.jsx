import { useState, useEffect } from 'react'
import Buttons from '../Components/Buttons'

function App() {

  const [digit, setDigit] = useState('')
  const [total, setTotal] = useState('')
  const [operator, setOperator] = useState('')
  const [isUpdated, setIsUpdated] = useState(false)
  const [fullTotal, setFullTotal] = useState('')
  const [isTotalled, setIsTotalled] = useState(false)
  const [start, setStart] = useState(false)
  const [isDecimal, setIsDecimal] = useState(false)
  const [isZero, setIsZero] = useState(false)

  useEffect(() => {
    if (digit.includes('.')) {
      setIsDecimal(true)
    } else {
      setIsDecimal(false)
    }

    if (digit.startsWith(0)) {
      setIsZero(true)
    } else {
      setIsZero(false)
    }


    if (isTotalled && isUpdated) {
      setTotal(fullTotal)
      setIsTotalled(false)
      setStart(true)
    }

    if (isTotalled && !isUpdated) {
      setTotal('')
    }
    //3 + 5 * 6 - 2 / 4 should produce 32.5 or 11.5 
  }, [digit, isTotalled, isUpdated])

  function insertOperator(e) {
    if (isUpdated === false) {
      setTotal(prevTotal => prevTotal + digit)
      setOperator(prevOperator => prevOperator + e)
    } else {
      setOperator(prevOperator => prevOperator + e)
    }
    setIsUpdated(true)
  }

  function insertDigit(e) {
    let selectedDigit = e

    if (e === '.' && isDecimal === false) {
      selectedDigit = '.'
    } else if (e === '.' && isDecimal === true) {
      selectedDigit = ''
    } else if (e === 0 && isZero === false) {
      selectedDigit = 0
    } else if (e === 0 && isZero === true) {
      selectedDigit = ''
    }

    setIsUpdated(false)

    if (operator.length === 1) {
      setTotal(prevTotal => prevTotal + operator)
      setOperator('')
      setDigit('')
      setDigit(prevDigit => prevDigit + selectedDigit)
    } else if (operator.length > 1) {
      let newOperators
      if (operator.endsWith('-')) {
        newOperators = operator.slice(-2)
      } else {
        newOperators = operator.slice(-1)
      }
      setTotal(prevTotal => prevTotal + newOperators)
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

    setDigit('')
    setOperator('')
    setStart(false)
  }

  function clearScreen() {
    setTotal('')
    setDigit('')
    setOperator('')
    setIsUpdated(false)
    setFullTotal('')
    setStart(false)
    setIsTotalled(false)
  }

  return (
    <div className="container">

      <div className="input-total-container">
        <div className="total-box">{total}</div>

        {!isTotalled && !start &&
          <input id="display" value='0' onChange={e => checkZero(e)} />
        }
        {!isTotalled && start &&
          <input id="display" value={digit} onChange={e => checkZero(e)} />
        }
        {isTotalled &&
          <input id="display" value={fullTotal} onChange={e => checkZero(e)} />
        }
      </div>

      <Buttons
        insertDigit={insertDigit}
        insertOperator={insertOperator}
        addSum={() => addSum(digit)}
        digit={digit}
        clearScreen={clearScreen}
      />

    </div>
  )
}

export default App


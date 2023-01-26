import { useState } from "react"

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const incrementar = ( numero:number = 1 ):void => {
    setCounter( counter + numero )
  }

  return (
    <div className="mt-5">
        <h3>Counter: UseState</h3>
        <span>Valor: {counter}</span>
        <br />
        <button 
        onClick={ () => incrementar(1) }
        className="py-2 px-4 rounded border-2 border-blue-500 hover:bg-blue-500">
          +1
        </button>
        <button 
        onClick={ () => incrementar(2) }
        className="py-2 px-4 rounded border-2 border-blue-500 hover:bg-blue-500">
          +2
        </button>
        <button 
        onClick={ () => setCounter(0) }
        className="py-2 px-4 rounded border-2 border-red-500 hover:bg-red-500">
          Reset
        </button>
    </div>
  )
}

export default Counter
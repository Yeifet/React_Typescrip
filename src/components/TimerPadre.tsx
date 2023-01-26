import { useState } from "react"
import { Timer } from "./Timer"

export const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState<number>(1000)

  return (
    <>
        <span>Milisegundos { milisegundos }</span>

        <br />

        <button
        onClick={ () => { setMilisegundos(1000) }}
        className="py-2 px-4 rounded border-2 border-red-500 hover:bg-red-500">
          1000
        </button>

        <button
        onClick={ () => { setMilisegundos(2000) }}
        className="py-2 px-4 rounded border-2 border-red-500 hover:bg-red-500">
          2000
        </button>

        <Timer milisegundos={ milisegundos } />
    </>
  )
}

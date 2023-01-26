import { useReducer } from "react";

const initialState = {
    contador: 0,
}

type ActionType = 
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom', payload:number }

const contadorReducer = ( state: typeof initialState, action:ActionType ) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }

        case 'decrementar':
            return {
              ...state,
              contador: state.contador - 1
            }

        case 'custom':
          return {
            ...state,
            contador: state.contador + action.payload
          }
    
        default:
            return state;
    }
}

export const ContadorRed = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)

  return (
    <>
        <h2>Contador: { contadorState.contador }</h2>
        <button
        onClick={ () => dispatch({ type: 'incrementar' })}
        className="py-2 px-4 rounded border-2 border-red-500 hover:bg-red-500">
          +1
        </button>

        <button
        onClick={ () => dispatch({ type: 'decrementar' })}
        className="py-2 px-4 rounded border-2 border-red-500 hover:bg-red-500">
          -1
        </button>

        <button
        onClick={ () => dispatch({ type: 'custom', payload:100 })}
        className="py-2 px-4 rounded border-2 border-red-500 hover:bg-red-500">
          custom
        </button>
    </>
  )
}

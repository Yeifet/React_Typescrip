import { useState } from "react"

interface User {
    uid: string,
    name: string
}

export const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Yeifet Toledo'
        })
    }

  return (
    <div className="mt-5">
        <h3>Usuario: UseState</h3>

        <button
            onClick={ login }
            className="py-2 px-4 rounded border-2 border-blue-500 hover:bg-blue-500">
            Login
        </button>

        <pre> { JSON.stringify(user) } </pre>
    </div>
  )
}

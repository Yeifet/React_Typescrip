import { useForm } from "../hooks/useForm"

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: 'yeifettoledo@gmail.com',
        nombre: 'yeifet',
        edad: 20
    })

    const { email, nombre, edad } = formulario

    /* const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    })

    const handleChange = ({ target }:ChangeEvent<HTMLInputElement> ):void => {
        const { name, value } = target

        setFormulario({
            ...formulario,
            [name]: value
        })
    } */

  return (
    <form autoComplete="off">
        <div className="mb-3 flex flex-col p-2">
            <label htmlFor="">Nombre: </label>
            <input
                type="text"
                name="nombre"
                className="rounded py-2 px-4 text-black"
                value={ nombre }
                onChange={ handleChange }
            />
        </div>

        <div className="mb-3 flex flex-col p-2">
            <label htmlFor="">Email: </label>
            <input
                type="email"
                name="email"
                className="rounded py-2 px-4 text-black"
                value={ email }
                onChange={ handleChange }
            />
        </div>

        <div className="mb-3 flex flex-col p-2">
            <label htmlFor="">Edad: </label>
            <input
                type="edad"
                name="number"
                className="rounded py-2 px-4 text-black"
                value={ edad }
                onChange={ handleChange }
            />
        </div>

        <pre>{ JSON.stringify(formulario) }</pre>
    </form>
  )
}

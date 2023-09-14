import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)

  console.log(user);

  return (
    <div>
      <h1>LoginPage</h1>
      {JSON.stringify(user)}

      <button
        className="btn btn-primary"
        onClick={() => setUser({
          id: 1234,
          name: 'Popa',
          email: 'popa@gmail.com'
        })}
      >
        Establecer usuario
      </button>
    </div >
  )
}

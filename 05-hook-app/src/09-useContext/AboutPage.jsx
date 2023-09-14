import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const AboutPage = () => {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>AboutPage</h1>
      {JSON.stringify(user)}
    </div>
  )
}

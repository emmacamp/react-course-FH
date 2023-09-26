import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/context/AuthProvider";

export const PublicRoute = ({ children }) => {

    const { logged } = useAuth();

    return (!logged) ? children : <Navigate to='/marvel' replace={true} />

}

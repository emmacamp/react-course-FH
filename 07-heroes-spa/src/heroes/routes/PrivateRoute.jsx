import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/context/AuthProvider";
import { useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { logged } = useAuth();


    const { pathname, search } = useLocation();
    localStorage.setItem('lastPath', pathname + search);

    return (logged) ? children : <Navigate to='/login' replace={true} />

}

import { Navigate } from "react-router"

const ProtectedRoute = ({children}) => {
    const token = sessionStorage.getItem("token")

    return token ? children : <Navigate to={'/login'} />
}

export default ProtectedRoute 
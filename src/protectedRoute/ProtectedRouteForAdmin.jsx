/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export const ProtectedRouteForAdmin = ({ children }) => {
    const storedUser = localStorage.getItem('users');
    let user = null;

    if (storedUser) {
        try {
            user = JSON.parse(storedUser);
        } catch (error) {
            console.error("Error parsing stored user:", error);
            localStorage.removeItem('users');
        }
    }

    if (user?.role === "admin") {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

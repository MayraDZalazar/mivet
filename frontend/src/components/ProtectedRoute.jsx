import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLogged = true; // luego será token

  return isLogged ? children : <Navigate to="/login" />;
}

import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  // Fallback to localStorage if the isLoggedIn prop is not explicitly provided
  const activeUser = isLoggedIn !== undefined ? isLoggedIn : !!localStorage.getItem("loggedInUser");

  if (!activeUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

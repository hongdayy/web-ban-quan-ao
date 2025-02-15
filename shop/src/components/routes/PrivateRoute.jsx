import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // Các trang công khai không cần đăng nhập
  const publicRoutes = ["/register", "/reset", "/login"];

  if (!user && !publicRoutes.includes(location.pathname)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

import React, { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import useAdmin from "../../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoader] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isLoader) {
    return <Loader></Loader>;
  }
  if (!user || !isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default AdminRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = true;

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;

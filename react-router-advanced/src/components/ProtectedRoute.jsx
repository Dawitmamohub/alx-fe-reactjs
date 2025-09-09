import React from "react";
import { Navigate } from "react-router-dom";

import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Set to false to test redirect behavior

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;

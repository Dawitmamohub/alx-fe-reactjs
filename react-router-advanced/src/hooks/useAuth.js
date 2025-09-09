import { useState } from "react";

function useAuth() {
  // Simulate authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate login function
  function login() {
    setIsAuthenticated(true);
  }

  // Simulate logout function
  function logout() {
    setIsAuthenticated(false);
  }

  return { isAuthenticated, login, logout };
}

export default useAuth;

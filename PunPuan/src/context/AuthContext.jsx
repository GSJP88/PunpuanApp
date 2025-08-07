import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // "tenant" | "landlord" | null

  // Load role from localStorage on initial load
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  // Login function
  const login = (role) => {
    setUserRole(role);
    localStorage.setItem("userRole", role);
  };

  // Logout function
  const logout = () => {
    setUserRole(null);
    localStorage.removeItem("userRole");
  };

  // Check if user is logged in
  const isLoggedIn = !!userRole;

  return (
    <AuthContext.Provider value={{ userRole, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);

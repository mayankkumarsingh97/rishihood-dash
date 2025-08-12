"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const storedState = localStorage.getItem("auth");
    return storedState
      ? JSON.parse(storedState)
      : { isAuthenticated: false, user: null };
  }
  return { isAuthenticated: false, user: null };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, getInitialState);

  //
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

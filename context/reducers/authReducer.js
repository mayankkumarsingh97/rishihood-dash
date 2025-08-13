export const initialAuthState = {
  isAuthenticated: false,
  user: null,
};
//@
// This file is part of the Rishihood Dashboard project.
// It provides the reducer Function  for managing user authentication state.
// The reducer handles actions like LOGIN and LOGOUT to update the authentication state.
//@
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};

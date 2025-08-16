export interface AuthState {
  isAuthenticated: boolean;
  user: any; // Replace 'any' with your actual user type if available
}

export interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  payload?: any; // Replace 'any' with your actual user type if available
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
};

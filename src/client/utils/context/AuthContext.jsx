import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  // user: null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Quand on se connecte, on enregistre Utilisateur dans le stockage local
  useEffect(() => {
    // "Storage.setItem('user', 'yoann')" : Ajoute une entrée en utilisant, Syntaxe :
    // "JSON.stringify()" : Convertit une valeur JS en chaîne JSON
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]); // Tableau des dépendences => "state.user", car chaque fois qu'on change, on met à jour "localStorage"

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
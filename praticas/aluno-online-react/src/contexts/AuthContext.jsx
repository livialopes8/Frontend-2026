import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  function login(dadosUsuario) {
    setAutenticado(true);
    setUsuario(dadosUsuario);
  }

  function logout() {
    setAutenticado(false);
    setUsuario(null);
  }

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
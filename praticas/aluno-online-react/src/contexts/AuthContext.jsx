import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(
    () => localStorage.getItem("autenticado") === "true"
  );
  const [usuario, setUsuario] = useState(
    () => JSON.parse(localStorage.getItem("usuario") || "null")
  );

  function login(dadosUsuario) {
    setAutenticado(true);
    setUsuario(dadosUsuario);
    localStorage.setItem("autenticado", "true");
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
  }

  function logout() {
    setAutenticado(false);
    setUsuario(null);
    localStorage.removeItem("autenticado");
    localStorage.removeItem("usuario");
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
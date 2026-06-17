import { createContext, useContext, useState } from "react";
import { autenticar } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(
    () => !!localStorage.getItem("token")
  );
  const [usuario, setUsuario] = useState(
    () => JSON.parse(localStorage.getItem("usuario") || "null")
  );

  async function login(email, senha) {
    const { usuario, token } = await autenticar(email, senha);

    setAutenticado(true);
    setUsuario(usuario);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  function logout() {
    setAutenticado(false);
    setUsuario(null);
    localStorage.removeItem("token");
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
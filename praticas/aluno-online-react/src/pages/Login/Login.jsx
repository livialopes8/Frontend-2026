import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login({ email });
    navigate("/");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-topo">
          <h1>Login</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" className="botao-entrar">
            Entrar
          </button>
        </form>

        <p className="login-rodape">Sistema Aluno Online</p>
      </div>
    </div>
  );
}

export default Login;
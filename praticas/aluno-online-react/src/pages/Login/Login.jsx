import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    try {
      await login(email, senha);
      navigate("/");
    } catch (err) {
      setErro(err.message);
    }
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

          {erro && <span className="erro">{erro}</span>}

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
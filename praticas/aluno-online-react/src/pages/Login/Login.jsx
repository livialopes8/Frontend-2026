import { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  function validarEmail(valorEmail) {
    return /\S+@\S+\.\S+/.test(valorEmail);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let formularioValido = true;

    setErroEmail('');
    setErroSenha('');

    if (!email.trim()) {
      setErroEmail('O campo de email é obrigatório.');
      formularioValido = false;
    } else if (!validarEmail(email)) {
      setErroEmail('Informe um e-mail válido.');
      formularioValido = false;
    }

    if (!senha.trim()) {
      setErroSenha('O campo de senha é obrigatório.');
      formularioValido = false;
    } else if (senha.length < 6) {
      setErroSenha('A senha deve ter no mínimo 6 caracteres.');
      formularioValido = false;
    }

    if (formularioValido) {
      alert('Login enviado com sucesso!');
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-topo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="Ícone Aluno Online"
          />
          <h1>Aluno Online</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="E-mail"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={erroEmail}
            placeholder=""
          />

          <FormInput
            label="Senha"
            type="password"
            name="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            error={erroSenha}
            placeholder=""
          />

          <button type="submit" className="botao-entrar">
            Entrar
          </button>
        </form>
      </div>

      <footer className="login-rodape">
        © 2026. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Login;
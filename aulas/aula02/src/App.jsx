import "./App.css";
import logo from "./assets/react.svg";

// ALT + SHIFT + F = Formata o código

function App() {
  //JSX = JS + XML
  return (
    <main>
      {/* chaves no JSX aceita código JS */}
      <img src={logo} alt="Logotipo da aplicação" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;

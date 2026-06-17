const BASE_URL = "http://localhost:3000";

export async function autenticar(email, senha) {
  const response = await fetch(`${BASE_URL}/usuarios?email=${email}`);
  const usuarios = await response.json();

  if (usuarios.length === 0) {
    throw new Error("Usuário não encontrado");
  }

  const usuario = usuarios[0];

  if (usuario.senha !== senha) {
    throw new Error("Senha incorreta");
  }

  const token = btoa(`${email}:${Date.now()}`);

  return { usuario, token };
}
const BASE_URL = "http://localhost:3000/requerimentos";

export async function listarRequerimentos() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function cadastrarRequerimento(dados) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  });
  return response.json();
}
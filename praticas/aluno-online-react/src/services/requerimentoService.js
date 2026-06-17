const BASE_URL = "http://localhost:3000/requerimentos";

function getToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("401");
  }

  return token;
}

export async function listarRequerimentos() {
  const token = getToken();

  const response = await fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

export async function cadastrarRequerimento(dados) {
  const token = getToken();

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });

  return response.json();
}
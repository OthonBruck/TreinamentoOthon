const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

function mostraNome({ nome }) {
  console.log(nome);
}

mostraNome(usuario);

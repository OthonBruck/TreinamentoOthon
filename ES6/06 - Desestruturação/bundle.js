"use strict";

var usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostraNome(usuario);

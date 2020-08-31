const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

//2.1 Utilizando o map

const newArr = usuarios.map((usuario) => usuario.idade);

console.log(newArr);

//2.2 utilizando o filter

const filter = usuarios.filter(
  (usuario) => usuario.idade > 18 && usuario.empresa === "Rocketseat"
);

console.log(filter);

//2.3 utilizando find

const find = usuarios.find((usuario) => usuario.empresa === "Google");

console.log(find);

//2.4 unindo operações

const uniao = usuarios
  .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter((usuario) => usuario.idade <= 50);

console.log(uniao);

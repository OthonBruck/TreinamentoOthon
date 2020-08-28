//rest

function soma(a, b, ...params) {
  return params;
}

console.log(soma(1, 3, 4, 4, 5, 6, 7));

//spread

const usuario1 = {
  nome: "Diego",
  idade: 23,
  empresa: "RocketSeat",
};

const usuario2 = { ...usuario1, nome: "Gabriel" };

console.log(usuario2);

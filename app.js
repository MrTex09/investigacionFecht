const info = [];
const punto3 = document.querySelector("#punto3");
const meterImg = document.querySelector("#caja3");
///
async function punto1() {
  const infoFetch = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());

  for (let i = 0; i < 3; i++) {
    info.push(infoFetch[i]);
  }
}
punto1();
///
console.log(info);
const objeto = {
  title: "titulo",
  body: "body lorem",
};
async function punto2() {
  const peticionPost = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objeto),
    }
  )
    .then((response) => response.json())
    .then((res) => console.log(res));
}
punto2();
///
punto3.addEventListener("click", (parametro) => {
  parametro.preventDefault();
  traerPoke();
});

function traerPoke() {
  fetch("https://pokeapi.co/api/v2/pokemon/mew/")
    .then((response) => response.json())
    .then((data) => {
      imagenPoke(data);
    });
}

function imagenPoke(pokemon) {
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  const texto = document.createElement("p");
  const div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(texto);

  meterImg.appendChild(div);
}

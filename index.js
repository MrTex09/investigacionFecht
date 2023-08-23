const info = [];

async function x () {
    const infoFetch = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
    
    for(let i = 0; i < 3; i++) {
        info.push(infoFetch[i])
    }
}

x()

console.log(info);

const objeto = {
    title: "Lorem ipsum dolor sit amet.",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quisquam?"
}

async function y () {
    const peticionPost = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    })
    .then(response => response.json())
    .then(res => console.log(res))

}

y()

async function z () {
    const img = await document.getElementById("imagen")

    const imagen = await fetch("https://via.placeholder.com/150", {
        mode: "no-cors"
    })
        .then(res => res.blob())
        .then(res => URL.createObjectURL(res))

    console.log(imagen)
    img.setAttribute("src", imagen)
}

z()
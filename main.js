
/* BOTON PLAY */
let play = document.querySelector(".play")
play.addEventListener("click", jugar)

/* ARRAY DE FRUTAS */
let frutas = [
    {
        nombre: "manzanas", simbolo: "&#127822", valor: 10
    },
    {
        nombre: "uvas", simbolo: "&#127815", valor: 15
    },
    {
        nombre: "limones", simbolo: "&#127819", valor: 20
    },
    {
        nombre: "fresas", simbolo: "&#127827", valor: 25
    },
    {
        nombre: "platanos", simbolo: "&#127820", valor: 50
    }/*,
     {
         nombre: "peras", simbolo: "&#127824", valor: 75
     }*/
]

/* DIVS DEL HTML*/
let jack1 = document.querySelector(".jack1")
let jack2 = document.querySelector(".jack2")
let jack3 = document.querySelector(".jack3")

let p = document.querySelector(".parrafo")

function jugar() {

    let aleatorio1 = Math.floor(Math.random() * frutas.length)
    let aleatorio2 = Math.floor(Math.random() * frutas.length)
    let aleatorio3 = Math.floor(Math.random() * frutas.length)
    jack1.innerHTML = frutas[aleatorio1].simbolo
    jack2.innerHTML = frutas[aleatorio2].simbolo
    jack3.innerHTML = frutas[aleatorio3].simbolo


    if (aleatorio1 == aleatorio2 && aleatorio1 == aleatorio3) {
        // p.innerHTML = "FELICIDADES!! GANASTE CON " + frutas[aleatorio1].simbolo + " <hr> " + "SUMAS " + frutas[aleatorio1].valor + " PUNTOS";
        p.innerHTML = `FELICIDADES!! GANASTE CON ${frutas[aleatorio1].simbolo} <hr> SUMAS ${frutas[aleatorio1].valor} PUNTOS`;

        puntos = puntos + frutas[aleatorio1].valor;
        parraf.innerHTML = "Tienes " + puntos + " Puntos";
        
        setTimeout(() => {
            alert("Enhorabuena!! 3 " + frutas[aleatorio1].nombre)
        }, 50);

    }

    else {
        p.innerHTML = "Sigue intentandolo!"
        puntos--
        parraf.innerHTML = "Tienes " + puntos + " Puntos";

    }
    if (puntos == 0) {
        setTimeout(() => {
            alert("Termino el juego!")
        }, 1);

        location.reload();
    }
}

/* CREANDO LISTAS */
let header = document.getElementById("header")

let ul = document.createElement("ul")
header.appendChild(ul)

let li = document.createElement("li");
li.innerHTML = "<span class='tres'> 3  </span> " + frutas[0].simbolo + " " + frutas[0].valor + " Puntos";
ul.appendChild(li);

let li2 = document.createElement("li");
li2.innerHTML = "<span class='tres'> 3  </span> " + frutas[1].simbolo + " " + frutas[1].valor + " Puntos";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.innerHTML = "<span class='tres'> 3  </span> " + frutas[2].simbolo + " " + frutas[2].valor + " Puntos";
ul.appendChild(li3);

let li4 = document.createElement("li");
li4.innerHTML = "<span class='tres'> 3  </span>  " + frutas[3].simbolo + " " + frutas[3].valor + " Puntos";
ul.appendChild(li4);
let li5 = document.createElement("li");
li5.innerHTML = "<span class='tres'> 3  </span>  " + frutas[4].simbolo + " " + frutas[4].valor + " Puntos";
ul.appendChild(li5);

/*let li6 = document.createElement("li");
li6.innerHTML = " <span class='tres'> 3  </span>  " + frutas[5].simbolo + " " + frutas[5].valor + " Puntos <hr>";
ul.appendChild(li6);*/

ul.classList.add("ul")


var puntos = 20
let parraf = document.createElement("p");
parraf.innerHTML = "Tienes " + puntos + " Puntos";
header.appendChild(parraf);














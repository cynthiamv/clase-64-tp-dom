const gatos = [{
        name: "Rodolfo",
        shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "images/blackwhite.jpg",
        sexo: "m",
        colores: ["negro", "blanco"]
    },

    {
        name: "Muzzarella",
        shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "images/black-cat.jpg",
        sexo: "h",
        colores: ["negro"]
    },

    {
        name: "Artilugia",
        shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "images/gata-tricolor.webp",
        sexo: "h",
        colores: ["tricolor", "negro", "blanco", "naranja"]
    },

    {
        name: "Wosito",
        shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "images/gato.jpg",
        sexo: "m",
        colores: ["gris", "rayado"]
    },

    {
        name: "Calamardo",
        shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "images/yellow-cat-lg.jpg",
        sexo: "m",
        colores: ["naranja", "blanco"]
    },

]

const cards = document.querySelector(".cards-container")


for (let i = 0; i < gatos.length; i++) {
    cards.innerHTML += `
    <div class="card"> 
        <div class="card-image">
            <img class="cat-image" src="${gatos[i].img}"/>
        </div>
        <div class="card-info">
            <h3 class="name">${gatos[i].name}</h3>
            <p class="shortDesc">${gatos[i].shortDesc}</p>
            <button class="openModal">Ver más</button>
        </div>
    </div>`;

}


const card = document.querySelectorAll(".card")
const cardText = document.getElementsByClassName("card-info")
const cardImage = document.getElementsByClassName("cat-image")
for (let k = 0; k < card.length; k++) {
    card[k].onmouseenter = (e) => {
        e.preventDefault()
        cardText[k].classList.add("hover-card")
        cardImage[k].classList.add("hover-image")
    }
    card[k].onmouseleave = (e) => {
        e.preventDefault()
        cardText[k].classList.remove("hover-card")
        cardImage[k].classList.remove("hover-image")
    }

}



const cardList = document.querySelectorAll(".openModal")
const modalContent = document.querySelector("#modal-content")
const modal = document.querySelector("#modal-cats")

for (let j = 0; j < cardList.length; j++) {
    cardList[j].onclick = () => {
        modalContent.innerHTML =
            `
                <div class="modal-info">
                    <div class="button-container">
                        <button id="cerrarModal"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="info">
                        <h1>${gatos[j].name}</h1>
                        <img src="${gatos[j].img}"/>
                        <p>${gatos[j].longDesc}</p>
                    </div>
                </div>
        `


        modalContent.classList.remove("hidden")
        modalContent.classList.add('position')

        const botonCerrarModal = document.getElementById("cerrarModal")
        botonCerrarModal.onclick = () => {
            modalContent.classList.add('hidden')
        }
    }

}

// FILTRO

const mascotaSeleccionada = mascota => {

    return `
    <div class="card"> 
        <div class="card-image">
            <img class="cat-image" src="${mascota.img}"/>
        </div>
        <div class="card-info">
            <h3 class="name">${mascota.name}</h3>
            <p class="shortDesc">${mascota.shortDesc}</p>
            <button class="openModal">Ver más</button>
        </div>
    </div>`;
}
const form = document.querySelector('form')


form.onsubmit = e => {
    // const errorNombre = document.querySelector(".error-nombre")
    // const errorTelefono = document.querySelector(".error-telefono")

    // e.preventDefault();

    // if (nombreUsuario.value == 0) {
    //     errorNombre.innerHTML = `<p>Debes ingresar tu nombre</p>`
    // } 
    // if (telefonoUsuario.value == 0) {
    //     errorTelefono.innerHTML = `<p>Debes ingresar tu telefono</p>`
    // }
    e.preventDefault()
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const telefonoUsuario = document.querySelector("#telefono-usuario").value;
    const checkboxes = document.querySelectorAll("input[type='checkbox']")
    const radios = document.querySelectorAll("input[type='radio']")
    let checkboxesElegidos = []
    for (let i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            checkboxesElegidos.push(checkboxes[i].value)
        }

    }

    let radioElegido = []
    for (let j = 0; j < radios.length; j++) {

        if (radios[j].checked) {
            radioElegido.push(radios[j].value)
        }

    }

    console.log(nombreUsuario, telefonoUsuario, checkboxesElegidos, radioElegido)

    let filtrar = ""

    for (let k = 0; k < gatos.length; k++) {
        cards.innerHTML = ``
        if (radioElegido[0] === "indistinto") {

            filtrar += mascotaSeleccionada(gatos[k])

        } else if (radioElegido[0] == gatos[k].sexo) {

            filtrar += mascotaSeleccionada(gatos[k])
        }
        
    }
    
    cards.innerHTML = filtrar
}

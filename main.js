const gatos = [{
        name: "Rodolfo",
        shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/400"
    },

    {
        name: "Muzzarella",
        shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/500"
    },

    {
        name: "Artilugia",
        shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/600"
    },

    {
        name: "Wosito",
        shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/700"
    },

    {
        name: "Calamardo",
        shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
        longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
        img: "http://www.placekitten.com/700"
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

// ANIMACION QUE NO FUNCIONA
const card = document.querySelectorAll(".card")
console.log(card)
const cardText = document.querySelectorAll(".card-info")
card.onmouseenter = () => {
    console.log("funciona")
    cardText.classList.add("hover-card")
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

        const botonCerrarModal = document.getElementById("cerrarModal")
        botonCerrarModal.onclick = () => {
            modalContent.classList.add('hidden')
        }   
    }

}



/* function cargarDatos() {
    fetch('../data/datae.json')
        .then(response => {
            //console.log(response);  // Log de la respuesta (opcional)
            return response.json(); // Devuelve el JSON parseado
        })
        .then(data => {
            //console.log(data); // Log de los datos del JSON
            // Llama a la función para crear las cards una vez que el JSON se haya cargado
            let contenedor_de_cards_padre = document.getElementById("contenedorCards")
            crearCards(data, contenedor_de_cards_padre);
            crearCards2(data)


        })
        .catch(error => console.error('Error cargando el JSON:', error));
} */

let contenedor_de_cards_padre = document.getElementById("contenedorCards")
lista = [
    {
        id: 1,
        upperT: "2 días / 1 noche",
        title: "Ramada By Wyndham",
        src: "https://www.coloniaexpress.com/uy/Paquetes/Detalle?nombre=Ramada_By_Wyndham&id=515",
        precioAntes: "UYU 9.884",
        precioDespues: "UYU 8.119",
        cantidadEstrella: 4,
        estrella: "fa-solid fa-star",
        mediaEstrella: "fa-regular fa-star-half-stroke",
        img: "../img/hoteles/ramada.jpg",
        listado: [
            {
                "descripcion": "Pasajes ida y vuelta + bus desde Montevideo"
            },
            {
                "descripcion": "Habitación doble standard con desayuno"
            }
        ]
    },
    {
        id: 2,
        upperT: "2 días / 1 noche",
        "title": "Hotel República",
        src: "https://www.coloniaexpress.com/uy/Paquetes/Detalle?nombre=Hotel_Rep%C3%BAblica&id=321",
        precioAntes: "UYU 9.570",
        precioDespues: "UYU 7.868",
        cantidadEstrella: 4,
        estrella: "fa-solid fa-star",
        mediaEstrella: "fa-regular fa-star-half-stroke",
        img: "../img/hoteles/republica.jpg",
        listado: [
            {
                "descripcion": "Pasajes ida y vuelta + bus desde Montevideo"
            },
            {
                "descripcion": "Habitación doble standard con desayuno"
            }
        ]
    },
    {
        id: 3,
        upperT: "2 días / 1 noche",
        title: "Believe Madero",
        src: "https://www.coloniaexpress.com/uy/Paquetes/Detalle?nombre=Believe_Madero&id=617",
        precioAntes: "UYU 8.377",
        precioDespues: "UYU 6.913",
        cantidadEstrella: 4,
        estrella: "fa-solid fa-star",
        mediaEstrella: "fa-regular fa-star-half-stroke",
        img: "../img/hoteles/belive.jpg",
        listado: [
            {
                "descripcion": "Pasajes ida y vuelta + bus desde Montevideo"
            },
            {
                "descripcion": "Habitación doble standard sin desayuno"
            }
        ]
    },
    {
        id: 4,
        upperT: "2 días / 1 noche",
        title: "HR Luxor",
        src: "https://www.coloniaexpress.com/uy/Paquetes/Detalle?nombre=HR_Luxor&id=467",
        precioAntes: "UYU 9.131",
        precioDespues: "UYU 7.516",
        cantidadEstrella: 4,
        estrella: "fa-solid fa-star",
        mediaEstrella: "fa-regular fa-star-half-stroke",
        img: "../img/hoteles/hrluxorfinal.jpg",
        listado: [
            {
                "descripcion": "Pasajes ida y vuelta + bus desde Montevideo"
            },
            {
                "descripcion": "Habitación doble classic con desayuno"
            }
        ]
    },
    {
        id: 5,
        upperT: "2 días / 1 noche",
        title: "Ker Recoleta",
        src: "https://www.coloniaexpress.com/uy/Paquetes/Detalle?nombre=Ker_Recoleta&id=71",
        precioAntes: "UYU 10.386",
        precioDespues: "UYU 8.520",
        cantidadEstrella: 4,
        estrella: "fa-solid fa-star",
        mediaEstrella: "fa-regular fa-star-half-stroke",
        img: "../img/hoteles/ker.jpg",
        listado: [
            {
                "descripcion": "Pasajes ida y vuelta + bus desde Montevideo"
            },
            {
                "descripcion": "Habitación doble classic con desayuno"
            }
        ]
    },
    {
        id: 6,
        upperT: "2 días / 1 noche",
        title: "IBIS Congreso & GrayLine City Tour",
        src: "https://www.coloniaexpress.com/uy/Paquetes/Detalle?nombre=IBIS_Congreso&id=483",
        precioAntes: "UYU 12.889",
        precioDespues: "UYU 10.523",
        cantidadEstrella: 3,
        estrella: "fa-solid fa-star",
        mediaEstrella: "fa-regular fa-star-half-stroke",
        img: "../img/hoteles/ibis.jpg",
        listado: [
            {
                "descripcion": "Pasajes ida y vuelta + bus desde Montevideo"
            },
            {
                "descripcion": "Habitación doble standard con desayuno"
            }
        ]
    }
]


const crearCards = (data, contenedor_padre) => {
    let contenedor_de_cards_padre = contenedor_padre;

    data.forEach((producto) => {

        //<div class="card_tamaños col-12 col-sm-6 col-md-3 mb-5">
        let card_tamaños = document.createElement("div");
        card_tamaños.classList.add("card_tamaños", "col-12", "col-sm-6", "col-md-4", "mb-5");
        card_tamaños.id = producto.id;
        contenedor_de_cards_padre.appendChild(card_tamaños);

        let card = document.createElement("div")
        card.classList.add("card", "contenedor_card")
        card_tamaños.appendChild(card)

        let contenedor_img = document.createElement("div")
        contenedor_img.classList.add("contenedor_img")
        card.appendChild(contenedor_img)

        let img = document.createElement("img")
        img.src = producto.img
        img.classList.add("card-img-top")
        img.alt = producto.title
        contenedor_img.appendChild(img)

        let card_body = document.createElement("div")
        card_body.classList.add("card-body")
        card.appendChild(card_body)

        let h2 = document.createElement("h2")
        h2.innerText = producto.upperT
        h2.classList.add("card-title", "tipografia_gilr", "upper_title")
        card_body.appendChild(h2)

        if (producto.title == "IBIS Congreso & GrayLine City Tour") {
            let h3 = document.createElement("h3")
            h3.innerText = producto.title
            h3.classList.add("card-title", "tipografia_gilb", "text-center","ibis")
            card_body.appendChild(h3)
        } else {
            let h3 = document.createElement("h3")
            h3.innerText = producto.title
            h3.classList.add("card-title", "tipografia_gilb", "text-center")
            card_body.appendChild(h3)
        }

       

        let contenedor_estrellas = document.createElement("div")
        contenedor_estrellas.classList.add("d-flex", "justify-content-center")
        card_body.appendChild(contenedor_estrellas)

        for (i = 0; i < producto.cantidadEstrella; i++) {

            let estrella = document.createElement("i")
            estrella.className = `${producto.estrella}`
            contenedor_estrellas.appendChild(estrella)
        }

        let ul = document.createElement("ul")
        card_body.appendChild(ul)

        producto.listado.forEach(item => {
            let li = document.createElement("li")
            li.classList.add("tipografia_gilr")
            li.innerText = item.descripcion
            ul.appendChild(li)
        })

        let contenedor_precios = document.createElement("div")
        card_body.appendChild(contenedor_precios)

        let precioAntes = document.createElement("h4")
        precioAntes.classList.add("precio_antes", "text-center","tipografia_gilb")
        precioAntes.innerText = producto.precioAntes
        contenedor_precios.appendChild(precioAntes)

        let precioDespues = document.createElement("h4")
        precioDespues.classList.add("precio_despues", "text-center","tipografia_gilb")
        precioDespues.innerText = producto.precioDespues
        contenedor_precios.appendChild(precioDespues)



        let ver_mas = document.createElement("a")
        ver_mas.classList.add("btn", "m-3", "btn_ver_mas")
        ver_mas.innerText = "Ver mas"
        ver_mas.href=producto.src
        ver_mas.setAttribute('target', '_blank')
        card_body.appendChild(ver_mas)


    })
}

const crearCards2 = (data) =>{
    contenedor_de_cards_padre = document.getElementById("card-list")
    data.forEach((producto) => {

        //<div class="card_tamaños col-12 col-sm-6 col-md-3 mb-5">
        let card_tamaños = document.createElement("div");
        card_tamaños.classList.add("card_tamaños","container", "mb-5","swiper-slide");
        card_tamaños.id = producto.id;
        contenedor_de_cards_padre.appendChild(card_tamaños);

        let card = document.createElement("div")
        card.classList.add("card", "contenedor_card")
        card_tamaños.appendChild(card)

        let contenedor_img = document.createElement("div")
        contenedor_img.classList.add("contenedor_img")
        card.appendChild(contenedor_img)

        let img = document.createElement("img")
        img.src = producto.img
        img.classList.add("card-img-top")
        img.alt = producto.title
        contenedor_img.appendChild(img)

        let card_body = document.createElement("div")
        card_body.classList.add("card-body")
        card.appendChild(card_body)

        let h2 = document.createElement("h2")
        h2.innerText = producto.upperT
        h2.classList.add("card-title", "tipografia_gilr", "upper_title")
        card_body.appendChild(h2)

        if (producto.title == "IBIS Congreso & GrayLine City Tour") {
            let h3 = document.createElement("h3")
            h3.innerText = producto.title
            h3.classList.add("card-title", "tipografia_gilb", "text-center","ibis")
            card_body.appendChild(h3)
        } else {
            let h3 = document.createElement("h3")
            h3.innerText = producto.title
            h3.classList.add("card-title", "tipografia_gilb", "text-center")
            card_body.appendChild(h3)
        }

       

        let contenedor_estrellas = document.createElement("div")
        contenedor_estrellas.classList.add("d-flex", "justify-content-center")
        card_body.appendChild(contenedor_estrellas)

        for (i = 0; i < producto.cantidadEstrella; i++) {

            let estrella = document.createElement("i")
            estrella.className = `${producto.estrella}`
            contenedor_estrellas.appendChild(estrella)
        }

        let ul = document.createElement("ul")
        card_body.appendChild(ul)

        producto.listado.forEach(item => {
            let li = document.createElement("li")
            li.classList.add("tipografia_gilr")
            li.innerText = item.descripcion
            ul.appendChild(li)
        })

        let contenedor_precios = document.createElement("div")
        card_body.appendChild(contenedor_precios)

        let precioAntes = document.createElement("h4")
        precioAntes.classList.add("precio_antes", "text-center","tipografia_gilb")
        precioAntes.innerText = producto.precioAntes
        contenedor_precios.appendChild(precioAntes)

        let precioDespues = document.createElement("h4")
        precioDespues.classList.add("precio_despues", "text-center","tipografia_gilb")
        precioDespues.innerText = producto.precioDespues
        contenedor_precios.appendChild(precioDespues)



        let ver_mas = document.createElement("a")
        ver_mas.classList.add("btn", "m-3", "btn_ver_mas")
        ver_mas.innerText = "Ver mas"
        ver_mas.href=producto.src
        ver_mas.setAttribute('target', '_blank')
        card_body.appendChild(ver_mas)


    })

    const swiper = new Swiper('.slider-wrapper', {
        
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0:{
                slidesPerView: 1
            },
            620:{
                slidesPerView: 2
            },
            1024:{
                slidesPerView: 3
            }

        }
        
      });
    
}

crearCards(lista, contenedor_de_cards_padre)
crearCards2(lista)


document.getElementById('copy-button').addEventListener('click', function () {
    const textToCopy = document.getElementById('text-to-copy').innerText;

    // Usando la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(textToCopy).then(function () {
        const alertBox = document.getElementById('alert');
        alertBox.style.display = 'block';

        setTimeout(() => {
            alertBox.classList.add('hide');
            setTimeout(() => {
                alertBox.style.display = 'none';
                alertBox.classList.remove('hide');
            }, 500); // Tiempo para la transición de opacidad
        }, 2000); // Tiempo antes de que se oculte la alerta
    }).catch(function (error) {
        console.error('Error al copiar el texto: ', error);
    });
});
document.getElementById('copy-button2').addEventListener('click', function () {
    const textToCopy = document.getElementById('text-to-copy2').innerText;

    // Usando la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(textToCopy).then(function () {
        const alertBox = document.getElementById('alert2');
        alertBox.style.display = 'block';

        setTimeout(() => {
            alertBox.classList.add('hide');
            setTimeout(() => {
                alertBox.style.display = 'none';
                alertBox.classList.remove('hide');
            }, 500); // Tiempo para la transición de opacidad
        }, 2000); // Tiempo antes de que se oculte la alerta
    }).catch(function (error) {
        console.error('Error al copiar el texto: ', error);
    });
});




/* cargarDatos() */
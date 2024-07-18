function cargarDatos() {
    fetch('../data/datae.json')
        .then(response => {
            console.log(response);  // Log de la respuesta (opcional)
            return response.json(); // Devuelve el JSON parseado
        })
        .then(data => {
            console.log(data); // Log de los datos del JSON
            // Llama a la función para crear las cards una vez que el JSON se haya cargado
            crearCards(data);
            

        })
        .catch(error => console.error('Error cargando el JSON:', error));
}


const crearCards = (data) => {
    let contenedor_de_cards_padre = document.getElementById("contenedorCards")

    data.forEach((producto) => {
        console.log(producto)
        //<div class="card_tamaños col-12 col-sm-6 col-md-3 mb-5">
        let card_tamaños = document.createElement("div");
        card_tamaños.classList.add("card_tamaños", "col-12", "col-md-6", "col-lg-4", "mb-5");
        card_tamaños.id = producto.id;
        contenedor_de_cards_padre.appendChild(card_tamaños);

        //<div class="card contenedor_card">
        let contenedor_card = document.createElement("div");
        contenedor_card.classList.add("card", "contenedor_card");
        card_tamaños.appendChild(contenedor_card);

        //<div class="contenedor_card_img img-fluid contenedor_imagen ">

        let contenedor_img = document.createElement("div");
        contenedor_img.classList.add("contenedor_card_img", "img-fluid", "contenedor_imagen");
        contenedor_card.appendChild(contenedor_img);

        //<img src="img/wine.jpg" class="card-img-top" alt="Wine Tour - Colonia Express.">
        let img = document.createElement("img");
        img.src = producto.img;
        img.alt = `${producto.nombre + " - Colonia Express"}`
        img.classList.add("card-img-top")
        contenedor_img.appendChild(img)

        //<div class="div_moño">



        //<div class="card-body card_text">
        let card_body = document.createElement("div")
        card_body.classList.add("card-body", "card_text", "d-flex", "justify-content-center", "flex-column")
        contenedor_card.appendChild(card_body)

        //<div class="d-flex flex-column">

        let div_encabezados = document.createElement("div");
        div_encabezados.classList.add("d-flex", "flex-column");
        card_body.appendChild(div_encabezados);

        //<h3 class="card-title poppins-extrabold azul text-center order-2">WINE EXPERIENCE</h3>
        //<h4 class="card-title poppins-extrabold azul text-center h4_card order-1">DAY TOUR</h4>
        let title_h2 = document.createElement("h2")
        title_h2.innerHTML=producto.upperT
        title_h2.classList.add("card-title","upper_title","roboto-regular")
        div_encabezados.appendChild(title_h2)

        let title_h3 = document.createElement("h3");
        title_h3.classList.add("card-title", "roboto-regular", "azul", "text-center", "card_titulo");
        title_h3.innerHTML = producto.title.toUpperCase();
        div_encabezados.appendChild(title_h3)

       

        let div_footer = document.createElement("div")
        div_footer.classList.add("row","mt-3")
        card_body.appendChild(div_footer)

        let contenedor_ver_mas = document.createElement("div")
        contenedor_ver_mas.classList.add("col-6")
        div_footer.appendChild(contenedor_ver_mas)

        let btn = document.createElement("a");
        btn.href = `detalle.html?id=${producto.id}`;  // Redirigir a detalle.html con el ID del producto
        btn.classList.add("btn", "btn_card");
        btn.innerHTML = "Ver más";
        contenedor_ver_mas.appendChild(btn);

        let div_contenedor_precio = document.createElement("div")
        div_contenedor_precio.classList.add("col-6");
        div_footer.appendChild(div_contenedor_precio)

        let precio_h4 = document.createElement("h4")
        if(!isNaN(producto.precio)){

            precio_h4.innerHTML = `$USD ${producto.precio}`
            precio_h4.classList.add("text-center","roboto-bold","precio_card")
            div_contenedor_precio.appendChild(precio_h4)
        }else{
            precio_h4.innerHTML = `${producto.precio}`
            div_contenedor_precio.classList.add("d-flex","align-items-center","justify-content-center")
            precio_h4.classList.add("text-center","roboto-bold","precio_card_texto")
            div_contenedor_precio.appendChild(precio_h4)
        }


    })
}






cargarDatos()
document.addEventListener("DOMContentLoaded", function () {
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  let c = getQueryParams();
  console.log("ID obtenido;", c);

  if (c) {
    cargarProducto(c);
  } else {
    console.error("ID de producto no proporcionado");
  }

  function cargarProducto(id) {
    fetch('../data/datae.json')
      .then(response => response.json())
      .then(data => {
        const producto = data.find(item => item.id === parseInt(id));
        const productoDetalleElement = document.getElementById('producto-detalle');
        const contenedor_wrapper = document.getElementById("contenedor_wrapper");
        const contenedor_wrapper2 = document.getElementById("contenedor_wrapper2");

        if (productoDetalleElement) {
          if (producto) {
            console.log('Producto encontrado:', producto);

            let contenedor_texto = document.createElement("div");
            productoDetalleElement.appendChild(contenedor_texto);

            let titulo = document.createElement("h2");
            titulo.innerText = producto.title;
            titulo.classList.add("tipografia_book", "mb-5");
            contenedor_texto.appendChild(titulo);

            let contenedor_ul = document.createElement("div");
            contenedor_texto.appendChild(contenedor_ul);

            let ul = document.createElement("ul");
            contenedor_ul.appendChild(ul);

            producto.detalles.forEach(element => {
              let li = document.createElement("li");
              li.classList.add("mt-3")
              li.innerHTML = element.descripcion;
              ul.appendChild(li);
            });

            producto.carrusel.forEach(item => {
              let swiper_slide = document.createElement("div");
              swiper_slide.classList.add("swiper-slide");

              let slider_img = document.createElement("img");
              slider_img.src = item.src;
              swiper_slide.appendChild(slider_img);
              contenedor_wrapper.appendChild(swiper_slide);
            });

            producto.carrusel.forEach(item => {
              let swiper_slide = document.createElement("div");
              swiper_slide.classList.add("swiper-slide");

              let slider_img = document.createElement("img");
              slider_img.src = item.src;
              swiper_slide.appendChild(slider_img);
              contenedor_wrapper2.appendChild(swiper_slide);
            });

            // Inicializar Swipers después de añadir las imágenes
            var swiper = new Swiper(".mySwiper", {
              loop: true,
              spaceBetween: 10,
              slidesPerView: 4,
              freeMode: true,
              watchSlidesProgress: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              }, 
            });

            var swiper2 = new Swiper(".mySwiper2", {
              loop: true,
              spaceBetween: 10,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              thumbs: {
                swiper: swiper,
              },
               autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              }, 
            });

          } else {
            console.log('Producto no encontrado');
            productoDetalleElement.innerHTML = '<p>Producto no encontrado</p>';
          }
        } else {
          console.error("Elemento con ID 'producto-detalle' no encontrado en el DOM");
        }
      })
      .catch(error => console.error('Error cargando el JSON:', error));
  }
});

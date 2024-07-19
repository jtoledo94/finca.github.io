document.addEventListener("DOMContentLoaded", function () {
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }
  let c = getQueryParams()
  console.log("ID obtenido;", c);

  if (c) {
    cargarProducto(c);
  } else {
    console.error("ID de producto no proporcionado")
  }

  function cargarProducto(id) {
    fetch('../data/datae.json')
      .then(response => response.json())
      .then(data => {
        const producto = data.find(item => item.id === parseInt(id));
        const productoDetalleElement = document.getElementById('producto-detalle');
        if (productoDetalleElement) {
          if (producto) {
            console.log('Producto encontrado:', producto);

            let contenedor_filas = document.createElement("div")
            contenedor_filas.classList.add("row","mt-5")
            productoDetalleElement.appendChild(contenedor_filas)

            let contenedor_texto = document.createElement("div")
            contenedor_texto.classList.add("col-12","col-md-6")
            contenedor_filas.appendChild(contenedor_texto)

            let titulo = document.createElement("h2")
            titulo.innerText = producto.title
            contenedor_texto.appendChild(titulo)

            let contenedor_ul = document.createElement("div")
            contenedor_texto.appendChild(contenedor_ul);

            let ul = document.createElement("ul")
            contenedor_ul.appendChild(ul);

            producto.detalles.forEach(element => {
              let li = document.createElement("li")
              li.innerHTML= element.descripcion
              ul.appendChild(li)
            });
            
            let contenedor_imagen = document.createElement("div")
            contenedor_imagen.classList.add("col-12","col-md-6","contenedor_imagen_detalle")
            contenedor_filas.appendChild(contenedor_imagen)

            let imagen = document.createElement("img")
            imagen.src=producto.img
            imagen.alt=producto.title
            contenedor_imagen.appendChild(imagen)


           /*  productoDetalleElement.innerHTML = `
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div>
                      <ul>
                        ${producto.detalles}.foreach((item)=>{
                            <li>${item.descripcion} </li>
                          })
                      </ul>
                    </div>

                  </div>
                  <div class="col-12 col-md-6">
                    <div>
                      <img src="${producto.img}" alt="${producto.title}">
                    </div>

                  </div>
                </div>
              `; */
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


})








/* // Este script se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener los parámetros de la URL
    function getQueryParams() {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
    }
  
    // Cargar datos del JSON y buscar el producto por ID
    function cargarProducto(id) {
      fetch('../data/datae.json')
        .then(response => response.json())
        .then(data => {
          const producto = data.find(item => item.id === parseInt(id));
          if (producto) {
            console.log('Producto encontrado:', producto); // Imprimir la información del producto en la consola
            document.getElementById('producto-detalle').innerText = JSON.stringify(producto, null, 2); // Mostrar la información del producto en el HTML
          } else {
            console.log('Producto no encontrado');
            document.getElementById('producto-detalle').innerText = 'Producto no encontrado';
          }
        })
        .catch(error => console.error('Error cargando el JSON:', error));
    }
  
    // Obtener el ID del producto desde los parámetros de la URL
    const id = getQueryParams();
    if (id) {
      cargarProducto(id);
    } else {
      document.getElementById('producto-detalle').innerText = 'ID de producto no proporcionado';
    }
  }); */






/*
document.addEventListener("DOMContentLoaded", function() {
// Función para obtener los parámetros de la URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

// Cargar datos del JSON y mostrar el producto
function cargarProducto(id) {
  fetch('../data/datae.json')
    .then(response => response.json())
    .then(data => {
      const producto = data.find(item => item.id === parseInt(id));
      if (producto) {
        mostrarProducto(producto);
      } else {
        document.getElementById('producto-detalle').innerHTML = 'Producto no encontrado';
      }
    })
    .catch(error => console.error('Error cargando el JSON:', error));
}

// Mostrar los detalles del producto en la página
function mostrarProducto(producto) {
  const detalleContainer = document.getElementById('producto-detalle');
  detalleContainer.innerHTML = `
    <h1>${producto.title}</h1>
    <p>${producto.descripcion}</p>
    <p>Precio: $${producto.precio}</p>
    <p>Disponibilidad: ${producto.disponibilidad ? 'Disponible' : 'No disponible'}</p>
    <img src="${producto.img}" alt="${producto.nombre}">
  `;
}

// Obtener el ID del producto desde los parámetros de la URL
const params = getQueryParams();
if (params.id) {
  cargarProducto(params.id);
} else {
  document.getElementById('producto-detalle').innerHTML = 'ID de producto no proporcionado';
}
});

 */
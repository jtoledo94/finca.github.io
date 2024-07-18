document.addEventListener("DOMContentLoaded",function(){
    function getQueryParams(){
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }
    let c = getQueryParams()
    console.log(c);
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
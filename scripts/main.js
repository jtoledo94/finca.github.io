


const h2_finca = document.getElementById("finca");

const lista_palabras = [
    { palabra: "Relajante" },
    { palabra: "Inolvidable" },
    { palabra: "Mágica" }
];

let index = 0;

/**
 * Recorre un array de palabras y las reemplaza cada 3 segundos añadiendole una animacion
 */
const cambiarPalabra = () => {
    h2_finca.classList.remove("animacion"); // Asegura que la clase se resetee
    
    // Utiliza requestAnimationFrame para esperar a que se realice el cambio anterior
    requestAnimationFrame(() => {
        setTimeout(() => {
            h2_finca.textContent = `${lista_palabras[index].palabra}`;
            h2_finca.classList.add("animacion"); // Agrega la clase para iniciar la animación
            index = (index + 1) % lista_palabras.length; // Avanza al siguiente índice circularmente
        }, 10); // Pequeño retraso para asegurar que la animación se inicie después de cambiar el contenido
    });
};

cambiarPalabra(); // Llama la función una vez para mostrar la primera palabra

setInterval(cambiarPalabra, 4000); // Cambia la palabra cada 3 segundos


/*

const h2_finca = document.getElementById("finca");

const lista_palabras = [
    { palabra: "Relajante" },
    { palabra: "Inolvidable" },
    { palabra: "Mágica" }
];

let index = 0;

const cambiarPalabra = () => {
    h2_finca.classList.remove("animacion"); // Asegura que la clase se resetee
    setTimeout(() => {
        h2_finca.textContent = ${lista_palabras[index].palabra};
        h2_finca.classList.add("animacion"); // Agrega la clase para iniciar la animación
        index = (index + 1) % lista_palabras.length; // Avanza al siguiente índice circularmente
    }, 10); // Pequeño retraso para asegurar que la animación se inicie después de cambiar el contenido
};

cambiarPalabra(); // Llama la función una vez para mostrar la primera palabra

setInterval(cambiarPalabra, 3000); // Cambia la palabra cada 3 segundos


*/
// cargar saldo
const ingresarSaldoBtn = document.getElementById('ingresar-saldo');

// funcion del saldo a cargar
function ingresarSaldo() {
    // ingresar el saldo
    const valor = document.getElementById('saldo').value;
    
    // Actualizar el valor del saldo
    document.getElementById('resultado').textContent = valor;
    
    // borrar el boton de saldo
    const texto1 = document.getElementById('textosaldo');
    const boton = document.getElementById('saldoboton');

      
    
    
    // Eliminr Contenidos
      boton.remove();
      saldo.remove();
      texto1.remove();
  
}
 
  

// abrir caja de skins
const skinBtn = document.getElementById('abrir-caja');
let contador = 0; // Inicializa un contador

skinBtn.addEventListener('click', function () {
    function ejecutarSkinRandomConDelay() {
        if (contador < 10) { 
            skinRandom(); 
            console.log("Iteración " + (contador + 1));
            contador++; 
            setTimeout(ejecutarSkinRandomConDelay, 250); 
        }
      
    }

    // Iniciar la primera ejecución
    ejecutarSkinRandomConDelay();
});


// resultado
const resultadoP = document.getElementById('resultado');

//imagenes de skins que pueden tocar
const imagenes = [
    'img/imagen1.png', 'img/imagen2.png', 'img/imagen3.png', 'img/imagen4.png', 'img/imagen5.png',
    'img/imagen6.png', 'img/imagen7.png', 'img/imagen8.png', 'img/imagen9.png', 'img/imagen10.png',
    'img/imagen11.png', 'img/imagen12.png', 'img/imagen13.png', 'img/imagen14.png', 'img/imagen15.png',
    'img/imagen16.png', 'img/imagen17.png',
];


// Función para la skin random que toca
    function skinRandom() {

    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);

    const imagenURL = imagenes[indiceAleatorio];
    
    imagen.src = imagenURL;
}

// Accion al abrir la caja
//const vecesAEjecutar = 5;
//let contador = 0;




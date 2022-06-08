const imagenes = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal a");
// SOLUCIÓN PROFESOR (Variables de estado):
let rutasImg = []; // Esto guardará las url de las imágenes
let imagenActiva = 0; // Número que representa un índice de rutasImg

// Abrir modal:
imagenes.forEach((imagen, i) => {
  rutasImg.push(imagen.getAttribute("href")); // Línea de la solución del profesor
  imagen.addEventListener("click", function (evento) {
    evento.preventDefault();
    imagenActiva = i; // Línea de la solución del profesor
    imgModal.setAttribute("src", rutasImg[imagenActiva]); // Línea de la solución del profesor
    modal.classList.add("visible");
    // imgModal.setAttribute("src", this.getAttribute("href")); // Comentado porque solución profesor

    // Controles: 

    // flechas.forEach((flecha, j) => {
    //   flecha.addEventListener("click", function (evento2) {
    //     evento2.preventDefault();
    //     evento2.stopPropagation();
    //     if (j == 0) {
    //       imgModal.setAttribute("src",imagenes[i == 0 ? 8 : i - 1].getAttribute("href"));
    //       i == 0 ? (i = 8) : i--;
    //     } else {
    //       imgModal.setAttribute("src",imagenes[i == 8 ? 0 : i + 1].getAttribute("href"));
    //       i == 8 ? (i = 0) : i++;
    //     }
    //   });
    // });
  });
});

// SOLUCIÓN PROFESOR (controles):

for (let i = 0; i < flechas.length; i++) {
  flechas[i].addEventListener("click", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();
    if(i == 0){ // i representa la dirección: 0 atrás / 1 adelante
      imagenActiva = imagenActiva > 0 ? imagenActiva - 1 : rutasImg.length - 1;
    } else {
      imagenActiva = imagenActiva < rutasImg.length - 1 ? imagenActiva + 1 : 0;
    }
    imgModal.setAttribute("src", rutasImg[imagenActiva]);
  });
}

// Cerrar modal:
modal.addEventListener("click", function () {
  this.classList.remove("visible");
});

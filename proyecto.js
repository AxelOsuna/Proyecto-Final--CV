

 let boton = document.querySelectorAll(".boton");
 let mostrar = document.querySelectorAll(".no_mostrar");


 boton.forEach(function(elemento, indice){
    elemento.addEventListener("click", function() {
        mostrar[indice].classList.toggle("mostrar");

        if (mostrar[indice].classList.contains("mostrar"))  {
            elemento.innerHTML = "Ocultar";
         }
        
        
         else {
            elemento.innerHTML = "Mostrar";
         }
    });
 })


 
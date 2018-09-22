// alert("Hola Mundo JS");
// console.log("Hola Mundo JS en consola");     
// let element= document.querySelector(".fa-star");

let elementlist= document.querySelectorAll(".fa-star");


     elementlist.forEach(function(element){
     element.addEventListener ("click",function() {
      alert ("Pelicula buena");
     element.classList.remove("far");
      element.classList. add ("fas");
     
     })
      
 });

let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener("click",function(ev) {
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
            
         location.href="https://francisco1985.github.io/Proyecto2/";  
        }, 1000);

        

    });
})
 

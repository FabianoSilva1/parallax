let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

// let keys = [
//     "Mercury",
//     "Venus",
//     "Earth",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune"
// ];
// let slider = new Swiper(".swiper-container",{
//     slidesPreView: "auto",
//     spaceBetween: 150,
//     centeredSlides: true,
//     mousewheel: true,
//     pagination:{
//         el: "planet-links",
//         clickable: true,
//         renderBullet: function(index, className){
//             return `<div class="`+ className + `">` + keys[index] + `</div>`;
//         }
//     }
// }
// )

class Menu {
  constructor (){
    this.lista = document.querySelectorAll(".planets");
    this.buttons =  document.querySelectorAll(".btn-planets");
  }
  removeColorButton (){
    for(let n = 0; this.buttons.length > n; n++){
      this.buttons[n].classList.remove("menu-click");
      
    }
  }
  removeClassCard (){
    for(let n = 0; this.lista.length > n; n++){
      this.lista[n].classList.remove("animation");
      
    }
  }

  addClassCard(){
  
    this.buttons.forEach((itnes, index) =>{
      itnes.addEventListener('click', () =>{
       this.removeClassCard()
       this.removeColorButton()
       this.buttons[index].classList.add('menu-click')
        this.lista[index].classList.add('animation');
        console.log(this.buttons[index])
      })

    })
   

  }

}

const menu = new Menu;
//
menu.addClassCard()
/*===== Cambiar el tamaño de la barra de navegación al desplazarse =====*/
var navbar = document.querySelector(".navbar");
//cuando el desplazamiento es superior a 20 de altura de ventana gráfica, agregue la clase fija a la etiqueta con una barra de navegación de clase
window.onscroll = () =>
{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/* Alternador de la barra de navegación */

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle)
{
    navTogle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}
// menú de cierre cuando se hace clic en navlink
const navLink = document.querySelectorAll(".nav-link");
function linkAction()
{
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
/* Colores de los Productos */
var pic = document.querySelector("#main-shoe");
var cyan = document.querySelector(".cyan");
var purple = document.querySelector(".purple");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
const colors =document.querySelectorAll(".color");
//almacenar la información del producto en el objeto
var info = [
    {
        src: "images/products/cyan.png"
    },
    {
        src: "images/products/purple.png"
    },
    {
        src: "images/products/blue.png"
    },
    {
        src: "images/products/pink.png"
    },
    {
        src: "images/products/green.png"
    },
    {
        src: "images/products/red.png"
    }
]
// cambiar color
cyan.addEventListener("click",function()
{
    pic.src = info[0].src;
})
purple.addEventListener("click",function()
{
    pic.src = info[1].src;
})
blue.addEventListener("click",function()
{
    pic.src = info[2].src;
})
pink.addEventListener("click",function()
{
    pic.src = info[3].src;
})
green.addEventListener("click",function()
{
    pic.src = info[4].src;
})
red.addEventListener("click",function()
{
    pic.src = info[5].src;
})
//color activo
function color()
{
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));
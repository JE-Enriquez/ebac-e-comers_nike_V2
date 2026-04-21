// Utilizando ejemplos del la clase de DOM con JavaScript

//console.log("hello word");

// const title = document.getElementById("txt");
// //console.log(title);

// const image = document.getElementsByClassName("logo");
// //console.log(image);

// const tag = document.getElementsByTagName("h3");
// //console.log(tag);

// const elem = document.querySelectorAll(".logo");
// //console.log(elem);


// Con esta seccio creamos un nuevo bloque de secction y seteamos los atributos que queremos, luego lo agregamos al padre que es el bloque de productos
// const parent = document.querySelector("..products");
// const newElem = document.createElement("section")
// newElem.setAttribute("class", "new");

// parent.append(newElement);



//------------------------------------------------

// ATRIBUTO DE CLASES

const logo = document.querySelector(".logo");
// logo.setAttribute("src", "img/tenis.jpg");
// console.log(logo.getAttribute("src"));
// console.log(logo.hasAttribute("src"));
// logo.removeAttribute("src");

// CSS DE CLASES

// vamos a entrar a una etiqueta que no tiene atributos y esta dentro de otras etiquetas

const parent2 = document.querySelector(".main__article--precio");

parent2.classList.add("red");
parent2.classList.replace("red", "blue");
//parent2.classList.remove("red");

// console.log(price);

// Modificar el texto de una etiqueta

const button = document.getElementsByTagName("button");
// console.log(button[23].innerText);

//  button[14].innerText = "Comprar Ahora";


 // Modificar Style


 button[23].style.backgroundColor = "black";
 button[23].style.color = "white";


 // Eventos

 
const iconReove = document.querySelectorAll(".cart__container--borrar");
 
 iconReove.forEach(elem => {
 
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
});


 // Haciendo eventos en el carrito


const header = document.querySelector("header");
const cartIcon = header.querySelector(".header__menu--logoNike");
const cart = document.querySelector(".main__cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

// Hacer que el carrito tenga un contador de elementos agrgados en el carrito






// Con esta seccion mostramos el menu de navegacion al hacer click en el icono del menu, y luego lo ocultamos al hacer click en el icono de cerrar

const menuIcon = header.querySelector(".header__menu--menulogo");
const menu = document.querySelector(".nav-bar");



menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
    // cerrarIcon.classList.toggle("hide");
});

const cerrarIcon = menu.querySelector(".cerrar");

cerrarIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// ************************************************************************************************************
// funcion para contador de productos en el carrito

const badge = document.getElementById("cart-badge");

let carCount = 0;

function addToCart() {
    carCount++;
    badge.innerText = carCount;
    badge.style.display = "block";

}

// ************************************************************************************************************
// Funcion para agrgar productos al carrito

const addCart = [];

const btnAgregar = document.querySelectorAll(".addCart");
let total = 0;

btnAgregar.forEach(btn => {

    

    
    btn.addEventListener('click', () => {
        
        addToCart();
    
        console.log("se grego algo al carrito");
        
        const producto = {
            id: btn.getAttribute("data-id"),
            img: btn.getAttribute("data-img"),
            nombre: btn.getAttribute("data-nombre"),
            precio: btn.getAttribute("data-precio"),
            cuantity: 1
            
        };
        
        
        
        const cartContainer = document.querySelector("#listaCarrito");
        const totalSapan = document.querySelector("#totalCarrito");
        
        const exist = addCart.some(item => item.id === producto.id);
        
        if(exist){
            addCart = addCart.map(p => {
                if(p.id === producto.id){
                    p.cuantity++;
                    
                    
                    
                }
                return p;
            })
            exist.cuantity++;
         
            
            // cartContainer.innerHTML = `<li>${producto.nombre} - $${producto.precio}</li>` + cartContainer.innerHTML;
            
        } else{
            
           
            cartContainer.innerHTML = `<li class="list__carrito" ><img class="cart__container--img" src="${producto.img}">${producto.nombre} - $${producto.precio} Cant: ${producto.cuantity}
            <i class="cart__container--borrar"><img src="img/borrar.png" alt="Icono Quitar"></i></li>` + cartContainer.innerHTML;
             
            
        }
        
        addCart.push({producto});
        
       total = total + (+producto.precio * producto.cuantity);
    

        // cartContainer.innerHTML = `<li>${producto.nombre} - $${producto.precio}</li>` + cartContainer.innerHTML;
        totalSapan.innerText = `${total}`;
        

// Eliminar el producto del carrito

        const iconReove = document.querySelectorAll(".cart__container--borrar");
 
        iconReove.forEach(elem => {
 
    elem.addEventListener("click", () => {
        function decreToCart(){
            carCount--;
            badge.innerText = carCount;
        };

        decreToCart();
        const elemParent = elem.parentElement;
        elemParent.remove();
        })
    });

        // function saveToLocalStorage(){
        //     localStorage.setItem("cart", JSON.stringify(cart));
        // }
        
        console.log(addCart);
        console.log(carCount);
        

   });

   
    
});


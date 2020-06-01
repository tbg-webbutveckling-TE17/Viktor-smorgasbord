var buyBtn = document.querySelector(".buyBtn")
var buyBtnn = document.querySelector(".buyBtnn")
var cartBtn = document.querySelector(".cartBtn")




var projects = [
{
    name:"Tangentbord",
    product: "assets/Images/keyboard.png",
    price: "700kr"  
},
{
    name:"Skärm" ,
    product: "assets/Images/screen.png",
    price: "1400kr" 
},
{
    name:"Gaming stol" ,
    product: 1,
    price: "1500kr"
},
{
    name:"Graffikkort",
    product: 1,
    price: "1900kr"
},
{
    name: "Moderkort",
    product: 1,
    price: "1500kr"
},
{
    name: "Hörlurar",
    product: 1,
    price: "900kr"
},
{
    name: "Gamingmus",
    product: 1,
    price: "800kr"
},
{
    name: "Mikrofon",
    product: 1,
    price: "1300kr"
}
    
];

buyBtn.addEventListener("click", function() {
    var name = document.createElement("p");
    name.innerHTML = products[0].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[0].product;
    cart.appendChild(product);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "x";
    cart.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        cart.removeChild(product);
        cart.removeChild(name);
        cart.removeChild(removeBtn);

    };    
});


buyBtnn.addEventListener("click", function() {
    var name = document.createElement("p");
    name.innerHTML = products[0].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[0].product;
    cart.appendChild(product);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "x";
    cart.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        cart.removeChild(product);
        cart.removeChild(name);
        cart.removeChild(removeBtn);

    };    
});

cartBtn.addEventListener("click", function() {
    cart.style.visibility = "visible";
    cart.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";    
});

cartXBtn.addEventListener("click", function() {
    cart.style.visibility = "hidden";
    cart.style.opacity = 0;
    mainContent.style.filter = "blur(0px)";
});




 


    




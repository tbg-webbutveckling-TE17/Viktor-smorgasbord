var buyButton1 = document.querySelector(".buyButton1");
var buyButton2 = document.querySelector(".buyButton2");
var buyButton3 = document.querySelector(".buyButton3");
var buyButton4 = document.querySelector(".buyButton4");
var buyButton5 = document.querySelector(".buyButton5");
var buyButton6 = document.querySelector(".buyButton6");
var buyButton7 = document.querySelector(".buyButton7");
var buyButton8 = document.querySelector(".buyButton8");





var cart = document.querySelector("#cart");
var cartBtn = document.querySelector(".cartBtn");

var totalPrice = document.querySelector(".totalPrice");
var productPrice = 0

var marginPx = 0;



var products = [
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
    product: "assets/Images/chair.png",
    price: "1500kr"
},
{
    name:"Graffikkort",
    product: "assets/Images/grafikkort.png",
    price: "1900kr"
},
{
    name: "Moderkort",
    product: "assets/Images/moderkort.png",
    price: "1500kr"
},
{
    name: "Hörlurar",
    product: "assets/Images/headset.png",
    price: "900kr"
},
{
    name: "Gamingmus",
    product: "assets/Images/mouse.png",
    price: "800kr"
},
{
    name: "Mikrofon",
    product: "assets/Images/Mic.png",
    price: "1300kr"
}
    
];

buyButton1.addEventListener("click", function() {
    productPrice = productPrice + products[0].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[0].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[0].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[0].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[0].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});


buyButton2.addEventListener("click", function() {
    productPrice = productPrice + products[1].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[1].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[1].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[1].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[1].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

buyButton3.addEventListener("click", function() {
    productPrice = productPrice + products[2].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[2].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[2].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[2].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[2].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

buyButton4.addEventListener("click", function() {
    productPrice = productPrice + products[3].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[3].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[3].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[3].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[3].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

buyButton5.addEventListener("click", function() {
    productPrice = productPrice + products[4].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[4].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[4].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[4].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[4].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

buyButton6.addEventListener("click", function() {
    productPrice = productPrice + products[5].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[5].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[5].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[5].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[5].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

buyButton7.addEventListener("click", function() {
    productPrice = productPrice + products[6].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[6].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[6].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[6].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[6].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

buyButton8.addEventListener("click", function() {
    productPrice = productPrice + products[7].price;
    totalPrice.innerHTML = "Total: " + productPrice;

    var name = document.createElement("h3");
    name.innerHTML = products[7].name;
    cart.appendChild(name);
    var product = document.createElement("img");
    product.classList.add("createdImages");
    product.src = products[7].product;
    cart.appendChild(product);
    var section = document.createElement("section");
    cart.appendChild(section);
    var price = document.createElement("p");
    price.innerHTML = products[7].price + " kr";
    section.appendChild(price);
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Ta Bort";
    section.appendChild(removeBtn);

    removeBtn.onclick = removeItem;

    function removeItem() {
        productPrice = productPrice - products[7].price;
        totalPrice.innerHTML = "Total: " + productPrice;

        cart.removeChild(product);
        cart.removeChild(name);
        section.removeChild(removeBtn);
        section.removeChild(price);
        cart.removeChild(section);
    };    
});

cartBtn.addEventListener("click", function() {
    cart.style.visibility = "visible";
    cart.style.opacity = 1;
    mainContent.style.filter = "blur(30px)";    
});






 


    




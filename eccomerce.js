//copy menu for mobile
function copyMenu(){
  //copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector('.dpt-cat');
  var dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  //copy inside to nav
  var mainNav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();

//show mobile menu 
const menuButton = document.querySelector('.trigger');
    closeButton = document.querySelector('.t-close');
    addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
  addClass.classList.toggle('showmenu')
})

closeButton.addEventListener('click' , function(){
  addClass.classList.remove('showmenu')
})




function clicked(){
var element = document.querySelector(".site");
element.classList.add("mystyle");

}

function unclicked(){
 var element = document.querySelector(".site");
 element.classList.remove("mystyle");
}










// Set the countdown duration to 24 hours in milliseconds
const countdownDuration = 30 * 24 * 60 * 60 *  1000;

// Calculate the end time by adding the duration to the current time
const endTime = new Date().getTime() + countdownDuration;

// Update the countdown every second
const x = setInterval(function() {
 const now = new Date().getTime();
 const distance = endTime - now;

 if (distance <= 0) {
   clearInterval(x);
   document.getElementById("countdown").innerHTML = "EXPIRED";
 } else {
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 *  24)) / (1000 * 60 *  60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = `${days}d `;
   document.getElementById("hours").innerHTML = `${hours}h`;
   document.getElementById("minutes").innerHTML = `${minutes}m `;
   document.getElementById("seconds").innerHTML = `${seconds}s `;
 }
}, 1000);



//searchBar
function myFunction() {
var input, filter, ul, li, a, i, images , txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
ul = document.getElementById("product-main");
images= document.getElementsByClassName("showcase")
li = ul.getElementsByTagName("h3");

for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        images[i].style.display = "";
        images[i].style.display = "";
    }
    else{
      images[i].style.display = "none";      }
}
}


function myFunctions() {
var input, filter, ul, li, a, i, images , txtValue;
input = document.getElementById("myInputs");
filter = input.value.toUpperCase();
ul = document.getElementById("product-main");
images= document.getElementsByClassName("showcase")
li = ul.getElementsByTagName("h3");

for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        images[i].style.display = "";
        images[i].style.display = "";
    }
    else{
      images[i].style.display = "none";      }
}
}






//hiding
function hiding(){
var productFeatured = document.getElementById('product-featuring')
var BannerFeatured = document.getElementById("banner")
var closeBtn = document.getElementById("closeButton")
if(productFeatured.style.display != "none"){
  productFeatured.style.display = "none"
}
if(BannerFeatured.style.display != "none"){
  BannerFeatured.style.display = "none"
}
if(closeBtn.style.display != "block"){
  closeBtn.style.display = "block"
}
}
function hidings(){
var productFeatured = document.getElementById('product-featuring')
var BannerFeatured = document.getElementById("banner")
var closeBtn = document.getElementById("closeButton")
var featuredProductss = document.getElementById("product-main")
if(productFeatured.style.display != "none"){
  productFeatured.style.display = "none"
}
if(BannerFeatured.style.display != "none"){
  BannerFeatured.style.display = "none"
}
if(closeBtn.style.display != "block"){
  closeBtn.style.display = "block"
}
if(BannerFeatured.style.display = "none"){
  featuredProductss.style.marginTop = "75px"
}
}

//Unhiding
function unhiding(){
var productFeatured = document.getElementById('product-featuring')
var BannerFeatured = document.getElementById("banner")
var closeBtn = document.getElementById("closeButton")
var searchBoxz = document.getElementById("search-box")
var input = document.getElementById("myInput")
var inputs = document.getElementById("myInputs")
var element = document.querySelector('.site')
var featuredProductss = document.getElementById("product-main")
element.classList.add("mystyles");

if(productFeatured.style.display != "block"){
  productFeatured.style.display = "block"
}
if(BannerFeatured.style.display != "block"){
  BannerFeatured.style.display = "block"
}
if(closeBtn.style.display != "none"){
  closeBtn.style.display = "none"
}
if(searchBoxz.style.display != "none"){
  searchBoxz.style.display = "none"
}
if(input.value != ""){
  input.value = "";
}
if(BannerFeatured.style.display != "none"){
  featuredProductss.style.marginTop = "0px"
}
if(inputs.value != ""){
  inputs.value = "";
}

var input, filter, ul, li, a, i, images , txtValue;
// input = document.getElementById("myInput");
// filter = input.value.toUpperCase();
 ul = document.getElementById("product-main");
images= document.getElementsByClassName("showcase")
li = ul.getElementsByTagName("h3");


 for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("a")[0];
     txtValue = a.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
         images[i].style.display = ""
     } else {
         images[i].style.display = "block";
     }
 }

}

//Showing searchBar
function searchBar(){
 var searchicon = document.getElementById('search-box')
 if(searchicon.style.display != "block"){
   searchicon.style.display = "block"
 }else{
   searchicon.style.display = "none"
 }
}




//CART
function myFunction() {
var input, filter, ul, li, a, i, images , txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
ul = document.getElementById("product-main");
images= document.getElementsByClassName("showcase")
li = ul.getElementsByTagName("h3");

for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        images[i].style.display = "";
        images[i].style.display = "";
    } else {
        images[i].style.display = "none";
    }
}
}




function myFunction() {
var input, filter, ul, li, a, i, images , txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
ul = document.getElementById("product-main");
images= document.getElementsByClassName("showcase")
li = ul.getElementsByTagName("h3");

for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        images[i].style.display = "";
        images[i].style.display = "";
    } else {
        images[i].style.display = "none";
    }
}
}



function myFunction() {
var input, filter, ul, li, a, i, images , txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
ul = document.getElementById("product-main");
images= document.getElementsByClassName("showcase")
li = ul.getElementsByTagName("h3");

for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        images[i].style.display = "";
        images[i].style.display = "";
    } else {
        images[i].style.display = "none";
    }
}
}



"use strict";   

let cart = [];
let cartTotal = 0;
const cartDom = document.querySelector(".cart");
const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');
const cartLengthDom = document.getElementById("cart-length");
const cartMessage = document.getElementById("cart-message");



addtocartbtnDom.forEach(addtocartbtnDom => {
addtocartbtnDom.addEventListener("click", () => {
cartMessage.style.display = "none"
updateCartLength();
const productDom = addtocartbtnDom.parentNode.parentNode;
const product = {
  img: productDom.querySelector(".product-img").getAttribute("src"),
  name: productDom.querySelector(".product-name").innerText,
  price: productDom.querySelector(".product-price").innerText,
  quantity: 1
};






function updateCartLength() {
// Count the number of unique products in the cart
const uniqueCards = new Set(cart.map(item => item.name));
const cardCount = uniqueCards.size + 1;  // Increment by 1 to start with 1
cartLengthDom.innerText = cardCount ;
// cartLengthDom.innerText = cardCount + " card" +  (cardCount === 1 ? "" : "s");
}


function cartMessageDisplay(){
if(cartLengthDom.innerHTML < 1 ){
  cartMessage.style.display = "flex"
}else{
  cartMessage.style.display = "none"
}
}

const IsinCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
if (IsinCart === false ) {
cartDom.insertAdjacentHTML("beforeend",`
<div class="card cart-items animated flipInX">
<div class="cart-first">
<div class="cart-third">
  <div class="p-2">
      <img src="${product.img}" alt="${product.name}" class="card-image" style="max-width: 200px;max-height:175px"/>
  </div>
  </div>
  <div class="cart-four">
  <div>
      <p class="text-info cart_item_name">${product.name}</p>
  </div>
  <div class="cart-five">
  <div class="p-2 mt-3 ml-auto">
      <button class="btn badge badge-secondary" type="button" data-action="increase-item">&plus;
  </div>
  <div class="p-2 mt-3">
    <p class="text-success item-size cart_item_quantity">${product.quantity}</p>
  </div>
  <div class="p-2 mt-3">
    <button class="btn badge badge-info" type="button" data-action="decrease-item">&minus;
  </div>
  <div class="p-2 mt-3 rmv-btn">
    <button class="rmv-badge badge-danger" type="button" data-action="remove-item"><i class="ri-delete-bin-fill"></i>
  </div>
  </div>
  </div>
  </div>


  <div class="cart-second">
  <div class="p-2 mt-3">
  <p class="text-success item-size-bold cart_item_price">${product.price}</p>
</div>
</div>
</div>
</div>
` 
);

if(document.querySelector('.cart-footer') === null){
 cartDom.insertAdjacentHTML("afterend",  `
   <div class="d-flex checkout flex-row shadow-sm card cart-footer mt-2 mb-3 animated flipInX" id="pay-section">
     <div class="p-2">
       <button class="checkout-btn badge-danger" type="button" data-action="clear-cart">Clear Cart
     </div>
     <div class="p-2 ml-auto">
       <button class="checkout-btn pay-btn badge-dark" type="button" data-action="check-out">Pay <span class="pay"></span> 
         &#10137;
     </div>
     </div>`);
 }  


addtocartbtnDom.innerText = "In cart";
addtocartbtnDom.disabled = true
cart.push(product);



const cartItemsDom = cartDom.querySelectorAll(".cart-items");
cartItemsDom.forEach(cartItemDom => {

if (cartItemDom.querySelector(".cart_item_name").innerText === product.name) {

  cartTotal += parseInt(cartItemDom.querySelector(".cart_item_quantity").innerText) 
  * parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
  document.querySelector('.pay').innerText = cartTotal + " $";

  // increase item in cart
  cartItemDom.querySelector('[data-action="increase-item"]').addEventListener("click", () => {
    cart.forEach(cartItem => {
      if (cartItem.name === product.name) {
        cartItemDom.querySelector(".cart_item_quantity").innerText = ++cartItem.quantity;
        cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
        parseInt(cartItem.price) + " $";
        cartTotal += parseInt(cartItem.price)
        document.querySelector('.pay').innerText = cartTotal + " $";
      }
    });
  });

  // decrease item in cart
  cartItemDom.querySelector('[data-action="decrease-item"]').addEventListener("click", () => {
    cart.forEach(cartItem => {
      if (cartItem.name === product.name) {
        if (cartItem.quantity > 1) {
          cartItemDom.querySelector(".cart_item_quantity").innerText = --cartItem.quantity;
          cartItemDom.querySelector(".cart_item_price").innerText = parseInt(cartItem.quantity) *
          parseInt(cartItem.price) + " $";
          cartTotal -= parseInt(cartItem.price)
          document.querySelector('.pay').innerText = cartTotal + " $";
        }
      }
    });
  });

  function decreaseCardCount() {
    const cardCount = parseInt(cartLengthDom.innerText); // Get the current card count
    if (cardCount > 0) {
      cartLengthDom.innerText = (cardCount - 1);
    }
  }
  //remove item from cart
   cartItemDom.querySelector('[data-action="remove-item"]').addEventListener("click", () => {
    cartMessageDisplay();
     cart.forEach(cartItem => {
       if (cartItem.name === product.name) {
           cartTotal -= parseInt(cartItemDom.querySelector(".cart_item_price").innerText);
           document.querySelector('.pay').innerText = cartTotal + " $";
           cartItemDom.remove();
           cart = cart.filter(cartItem => cartItem.name !== product.name);
           addtocartbtnDom.innerText = "Add to cart";
           addtocartbtnDom.disabled = false;
          // addtcart-messageocartbtnDom.disabled = false;
         };      
        if(cart.length < 1){
          document.querySelector('.cart-footer').remove();
        }
     }
);
decreaseCardCount()
cartMessageDisplay();
});




  //clear cart
  document.querySelector('[data-action="clear-cart"]').addEventListener("click" , () => {
    cartMessage.style.display = "flex";
    cartItemDom.remove();
    cart = [];
    cartTotal = 0;
    cartLengthDom.innerText = "0";
    // cartLengthDom.innerText = "0 card";
    if(document.querySelector('.cart-footer') !== null){
      document.querySelector('.cart-footer').remove();
    }
   addtocartbtnDom.innerText = "Add to cart";
   addtocartbtnDom.disabled = false;
 });

  document.querySelector('[data-action="check-out"]').addEventListener("click" , () => {
    cartMessage.style.display = "flex";
    cartItemDom.remove();
    cart = [];
    cartTotal = 0;
    cartLengthDom.innerText = "0";
    // cartLengthDom.innerText = "0 card";
    if(document.querySelector('.cart-footer') !== null){
      document.querySelector('.cart-footer').remove();
    }
   addtocartbtnDom.innerText = "Add to cart";
   addtocartbtnDom.disabled = false;
   alert("your order is replaced")
 });
}
});
}
});
});

function animateImg(img) {
img.classList.add("animated","shake");
}

function normalImg(img) {
img.classList.remove("animated","shake");
}




function showCart(){
const cartShow = document.getElementById("cart")
if(  cartShow.style.display != "block"){
cartShow.style.display = "block"
}else{
cartShow.style.display = "none"
}
}
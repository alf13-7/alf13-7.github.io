window.onload = function(){
	init();
}

function init(){
	console.log('Hello World');
	/*var person = prompt("Enter your name");
	window.localStorage.setItem('name', person);
	var y = window.localStorage.getItem('name');
	console.log(y);*/
}


/*----scrolling through items----*/

var counter = 0;
var currentItem = "T-Shirt One";
var currentPrice = "£20.00";

function changeImageLeft(){
	customiseCheckLeft();
	var images = ["ASSETS/merch/merchOne.jpg", "ASSETS/merch/merchTwo.jpg", "ASSETS/merch/merchThree.jpg","ASSETS/merch/redPick.jpg"];
	var products = ["T-Shirt One", "T-Shirt Two", "T-Shirt Three", "Pick"];
	var price = ["£20.00", "£24.99", "£14.99", "£4.99"];
	var y = document.getElementById("merchOne");
	if (counter == 0){
		counter = 3;
		currentPrice = price[counter];
		y.src = images[counter];
		currentItem = products[counter];
		document.getElementById("price").innerHTML = price[counter];
	}
	else{
		counter = counter - 1;
		currentPrice = price[counter];
		y.src = images[counter];
		currentItem = products[counter];
		document.getElementById("price").innerHTML = price[counter];
	}
}

function changeImageRight(){
	customiseCheckRight();
	var images = ["ASSETS/merch/merchOne.jpg", "ASSETS/merch/merchTwo.jpg", "ASSETS/merch/merchThree.jpg", "ASSETS/merch/redPick.jpg"];
	var products = ["T-Shirt One", "T-Shirt Two", "T-Shirt Three", "Pick"];
	var price = ["£20.00", "£24.99", "£14.99", "£4.99"];
	var y = document.getElementById("merchOne");
	if (counter == 3){
		counter = 0;
		currentPrice = price[counter];
		y.src = images[counter];
		currentItem = products[counter];
		document.getElementById("price").innerHTML = price[counter];
	}
	else{
		counter = counter + 1;
		currentPrice = price[counter];
		y.src = images[counter]; 
		currentItem = products[counter];
		document.getElementById("price").innerHTML = price[counter];
	}
}

/*----add to cart----*/

function addToCart(){
	var images = ["ASSETS/merch/merchOne.jpg", "ASSETS/merch/merchTwo.jpg", "ASSETS/merch/merchThree.jpg", "ASSETS/merch/redPick.jpg"];
	var cart = [];
	var priceCart = [];
	window.alert("ADDED TO CART");
	console.log(currentItem);
	console.log(currentPrice);
	cart.push(currentItem);
	priceCart.push(currentPrice);
	console.log(cart[0]);
	console.log(priceCart[0]);
	
	
	window.localStorage.setItem('ItemOne', "ITEM: "+currentItem);
	var y = window.localStorage.getItem('ItemOne');
	console.log(y);
	
}

 /*----check whether pick is item being viewed----*/
 
function customiseCheckRight(){
	if (counter == 2){
		document.getElementById("customise").style.display = "flex";
	}
	else{
		document.getElementById("customise").style.display = "none";
	}
}

function customiseCheckLeft(){
	if(counter == 0){
		document.getElementById("customise").style.display = "flex";
	}
	else{
		document.getElementById("customise").style.display = "none";
	}
}

/*----Customise pick----*/

function redPick(){
	var a = document.getElementById("pickOne");
	a.src = "ASSETS/merch/redPick.jpg";
}

function greenPick(){
	var b = document.getElementById("pickOne");
	b.src = "ASSETS/merch/greenPick.jpg";
}

function yellowPick(){
	var c = document.getElementById("pickOne");
	c.src = "ASSETS/merch/yellowPick.jpg";
}

function bluePick(){
	var d = document.getElementById("pickOne");
	d.src = "ASSETS/merch/bluePick.jpg";
}


function designOne(){
	var e = document.getElementById("designOne");
	document.getElementById("designOne").style.display = "flex";
	e.src = "ASSETS/merch/snakeOne.jpg";
}

function designTwo(){
	var f = document.getElementById("designOne");
	document.getElementById("designOne").style.display = "flex";
	f.src = "ASSETS/merch/fire.jpg";
}

function designThree(){
	var g = document.getElementById("designOne");
	document.getElementById("designOne").style.display = "flex";
	g.src = "ASSETS/merch/memeHead.jpg";
}

function designFour(){
	var h = document.getElementById("designOne");
	document.getElementById("designOne").style.display = "flex";
	h.src = "ASSETS/merch/patrick.jpg";
}




	
	
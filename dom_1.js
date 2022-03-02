// GET ELEMENT BY ID
/*
var headerTital = document.getElementById("header_id");
            console.log(headerTital);
            //headerTital.textContent = 555;
            //headerTital.innerHTML = "ram";
            headerTital.style.borderBottom="solid black" ;

 // GET ELEMENT BY CLASS
// var items = document.getElementsByClassName("li_class");
// console.log(items);
// items[1].textContent = "heyy!";
// items[1].style.background = 'black';   

// GET ELEMENT BY TAG

var tag = document.getElementsByTagName("li");
console.log(tag);

// QUERYSELECTOR
/*
var qs = document.querySelector('li');
qs.style.backgroundColor = "lightgreen";

var input = document.querySelector('input');
input.value = "heyy! shiv";

var submit = document.querySelector('input[type="button"]');
submit.value = 'send';

var item = document.querySelector('.li_class');
item.style.backgroundColor = "red";

var lastItem = document.querySelector('.li_class:last-child');
lastItem.style.color = "violet";

var secItem = document.querySelector('.li_class:nth-child(2)');
secItem.style.backgroundColor = "blue";

*/

// QUERYSELECTOR ALL
/*
var qsa = document.querySelectorAll('.items_class');
console.log(qsa);
qsa[0].textContent = "HELLO";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.background = "#f4f4f4";
    even[i].style.background = "#ccc";
}*/

// TRAVERSING THE DOM //

var itemList = document.querySelector("#ui_id");
//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightgreen';
// console.log(itemList.parentNode.parentNode);

//ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'skyblue';
// console.log(itemList.parentNode.parentElement);

//ChildNode
//console.log(itemList.childNodes);

//ChildrenNode
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
//  console.log(itemList.firstElementChild);
//  itemList.firstElementChild.style.backgroundColor = "blue";

//firstChild
//console.log(itemList.lastChild);

//firstElementChild
//console.log(itemList.ladtElementChild);
//itemList.lastElementChild.style.backgroundColor = "gray";

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//nextSibling
//console.log(itemList.previousSibling);

//nextElementSibling
//console.log(itemList.previousElementSibling);

//CREATE ELEMENT //

// create div
var newdiv = document.createElement('div');
newdiv.className = 'newdiv_class';
newdiv.id = 'newdiv_id';
newdiv.className = 'newdiv_id';
var newDivText = document.createTextNode('Hello world');

 newdiv.appendChild(newDivText);
 console.log(newdiv);
 var add = document.querySelector('body .container');
 var l2 = document.querySelector('body h1');
 newdiv.style.color='red';
 console.log(newdiv);
 add.insertBefore(newdiv,l2);
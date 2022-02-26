// GET ELEMENT BY ID
/*
var headerTital = document.getElementById("header_id");
            console.log(headerTital);
            //headerTital.textContent = 555;
            //headerTital.innerHTML = "ram";
            headerTital.style.borderBottom="solid black" ;
*/
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
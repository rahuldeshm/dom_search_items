//..DOM MANUPILATION..//
// Part 2 => https://www.youtube.com/watch?v=mPd2aJXCZ2g
// use above link to video address.

// TRANVERSING THE DOM//

var itemlist = document.querySelector('#items');// as # represent id so now we get elements of id items this are la elements.
/* we use this to transvrese and select item but by parent node or by child node */

// PARANT NODE //
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode)
// PARANTELEMENT //behaves same many times as parant node 
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentNode)

//CHILDNODES// this will give nodelist
// console.log(itemlist.childNodes) 
/* 
USE CHLIDREN because in childnodes we will get text nodes for 
/n or linebreaks from the html documents 
*/
//CHILDREN// this will give HTML collection.
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[2].style.backgroundColor = 'yellow';

//firstChild // does the same thing as childnode and gives value of first linebreak from the html doc.
// console.log(itemlist.firstChild); 
//firstelement child// this will work properly
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1';

//lastChild// don't use it will give text node of linebreak
// console.log(itemlist.lastChild);
//lastelement child  // work properly
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello 1';

//NEXT SIBILING//same as childnode and gives textelement of linebreak
// console.log(itemlist.nextSibling);
//NEXTELEMENTSINLING//insted of nextSibling use nextElementSibling
// console.log(itemlist.nextElementSibling);

//PREVIOUS SIBILING//
// console.log(itemlist.previousSibling);
//PREVIOUSELEMENTSIBLING
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green';

// // CREATE ELEMENT//
// var newDiv = document.createElement('div');// creating div element

// // ADD CLASS//
// newDiv.className = 'hello';

// //ADD ID// 
// newDiv.id = 'hello1';

// // ADD ATTRIBUTES//
// newDiv.setAttribute('title','Hello world');

// // ADD TEXT TO DIV //
// // CREATE TEXTNODE//

// var newDivText = document.createTextNode("Hello World");

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);

// var div=document.createElement('li');
// var divtext = document.createTextNode('rahul');
// var a=div.appendChild(divtext);

// var item = document.getElementById('items');
// item.innerHTML='<li class="list-group-items">helloworld</li>'+item.innerHTML
// console.log(div)
// console.log(newDiv);
//
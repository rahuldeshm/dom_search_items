//..DOM MANUPILATION..//
//part 1 => https://www.youtube.com/embed/0ik6X4DJKCc?t=1800s
// use above link to video address.
// Document Object Module 
/*Document Object Model is Application Programming interface (API) for 
HTML and XML documents*/
/*Javascript is used to read write and manupilate the DOM.*/


//EXAMINE THE DOCUMENTS

// console.dir(document);
// console.log(document.domain);  //=> gives domain;
// console.log(document.URL);     //=> gives URL
// console.log(document.title);   
// document.title="rahul deshmukh" //=> Can change title of the document by document.title.
// console.log(document.head)   // gives head element
// console.log(document.body) // gives body element
// console.log(document.doctype);  
// console.log(document.all);  // gives (not*array*) HTML Collection of all elements on the documents
// console.log(document.all[10]);  // this will give the element at index 10
// console.log(document.links); // gives html collection of links element
// document.all[10].textContent ="Hello"  // this is going to change the element at index 10 to hello.
/* we never use this method to select element as if we add
 something in html the 10th element is going to change.*/

//GET ELEMENT BY ID  //selector

// console.log(document.getElementById("header-title"));  // gives element with id header-title and everything inside it.
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle)
// headerTitle.textContent="Hello" //te
// headerTitle.innerText="Hello rahul"
// console.log(headerTitle.innerText)//on the site only displayed text will be shown to as
// console.log(headerTitle.textContent)//all text content in html file also with hidden file by css.
// // headerTitle.innerHTML='<h3> Hello HTML</h3>'; // replace inside the dom element.
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000'; // should use border-bottom camelcase 

//GET ELEMENTS BY CLASS NAME //gives elements of same class in HTML collection

// var items = document.getElementsByClassName('list-group-item');
// // console.log(items); //HTML collection
// // items[1].textContent = 'Hello two';  // can change text content
// // items[1].style.fontWeight = "bold" ;  //can give style to spicific element
// // items[1].style.backgroundColor = "yellow" ;
// // items.style.backgroundColor = "yellow" ; // can't change style of all like this //gives error

// for (var i =0;i<items.length;i++){
//     items[i].style.backgroundColor='yellow';
// }
// var tit =document.getElementsByClassName('title');
// console.log(tit)
// tit[0].style.fontWeight='bold';
// tit[0].style.color='green';

//GET ELEMENT BY TAG NAME //gives HTML collection of all elements with same tag.

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// // li[1].textContent = "";
// // li[1].style.fontWeight = 'bold';
// // li[1].style.backgroundColor ='yellow';

// for (var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERY SELECTOR  // 

/*
    used only for one item. if there are more items then it will 
select only first item . to select other we need to add 
"class-name: last-child" for last item of the class-name.
"class-name: nth-child(n)"  for nth child.
# =>for ID
. => for class name
"" (nothing) => element
*/

// var header = document.querySelector("#main-header");
// header.style.borderBottom = 'solid 5px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]'); //way to select specific item of input elements
// submit.value = "addto";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // Make only first item of this class red

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";
// var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.textContent = "";

// //QUERYSELECTORALL// 

/*gives nodelist which is similar to HTML collection but we can apply array
functions on them*/

// var items = document.querySelectorAll('.list-group-item');
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "rahul"
// items[1].style.color = 'green';
//selecitong odd or even 
// var odd =document.querySelectorAll('li:nth-child(odd)');
// for (var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }
// var even =document.querySelectorAll('li:nth-child(even)');
// for (var i=0;i<even.length;i++){
//     even[i].style.backgroundColor = '#ccc';
// }



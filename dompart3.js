//..DOM MANUPILATION..//
// part 3 => https://youtu.be/wK2cBMcDTss
// use this link to reach the video of part 3 of dom

//EVENTS//

//first method
/* 
<button onclick="alert('rahul')" class="btn btn-dark btn-block" id="button">Click here</button>
we can use like this in html code
*/
//seconed method
/*
<button onclick="buttonclick(2)" class="btn btn-dark btn-block" id="button">Click here</button>
this in html and below function in js code
function buttonclick(e){
    console.log(e);
}
*/
//third method 
/* 
this third method is uses in direct in js code by selecting items and then
performing action on thet code is given below
*/
// var btn = document.getElementById("button");
// btn.addEventListener("click",buttonclick);// right method
//btn.addEventListener("click",buttonclick());//!!
//this will not work as it is directily opening function before clicking
// function buttonclick(e){
//     // console.log("Rahul");
//     // document.querySelector("#header-title").innerHTML="RAHUL"
//     // document.querySelector("#main").style.backgroundColor = '#f4f4f4';
//     // console.log(e);
//     // var output = document.getElementById("output");
//     // output.innerHTML = e.target.id
//     // console.log(e.type) //click will get printed

// }

// var btn = document.getElementById("button");
// // btn.addEventListener("click",runEvent);
// // btn.addEventListener("dblclick",runEvent);
// // btn.addEventListener("mousedown",runEvent); 
// // btn.addEventListener("mouseup",runEvent);

// function runEvent(e){
//     console.log("EVENT TYPE: "+e.type)
// }

// var box = document.getElementById("box");
// box.addEventListener("mouseenter",runEvent)
// box.addEventListener("mouseleave",runEvent)
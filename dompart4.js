//..DOM MANUPILATION..//
/*
part 4 => https://www.youtube.com/watch?v=i37KVt_IcXw
use above link to video address.
in this we are goung to perform our final project of this lec.
*/
// ADDING ITEM //
//form selection
var form = document.getElementById("addForm");
// selection of element in which we have to add new element
var itemList = document.getElementById("items");
// creating an event listener for form 
form.addEventListener("submit", addItem);
// creating function to add element 
function addItem(e){
    e.preventDefault(); // stopping default from sending data .
    //getting value of our input
    var newItem = document.getElementById("item").value;
    // console.log(newItem)
    //creating new li element
    var li = document.createElement("li");
    li.className="list-group-item";
    li.innerHTML=newItem;
    //creating delete button 
    var dte = document.createElement("button");
    dte.className = "btm btn-danger btn-sm float-right delete";
    dte.innerHTML="x";
    // creating edit button
    var edit =document.createElement("button");
    edit.id="ebtn";
    edit.className="btm btn-danger btn-sm float-right delete edit";
    edit.innerHTML="EDIT";
    edit.style.background="green"
    
    //appending delete and edit button to li element and li to ul element
    li.appendChild(dte);
    li.appendChild(edit)
    itemList.appendChild(li);
    document.getElementById("item").value="";

}
//REMOVING ITEM//


//Eventlistener for click
itemList.addEventListener("click",deletefunction);
//function of delete and edit button
function deletefunction(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')){
        if (e.target.classList.contains("edit")){//function of edit button
            var li = e.target.parentElement;
            document.getElementById("item").value=li.firstChild.textContent;

        }
        if (confirm("Are You Sure?")){// function of delete button
            var li = e.target.parentElement;
            itemList.removeChild(li)  //this is html collection so other things will work
            // lilist.removeChild(li) //this will not work as lilist is a listnode
        }
    }
}

//ADDING EDIT BUTTON to all already present items
var lilist = document.querySelectorAll("li")
for (let i = 0;i<lilist.length;i++){
    var edit =document.createElement("button");
    edit.id="ebtn";
    edit.className="btm btn-danger btn-sm float-right delete edit";
    edit.innerHTML="EDIT";
    edit.style.background="green"
    lilist[i].appendChild(edit)
}

// SEARCHING for items  // filter

var filter = document.getElementById('filter');

//adding event listener
filter.addEventListener("keyup",filteritems);

//creating function of filteritems
function filteritems(e){
    e.preventDefault();
    var text =e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName("li")
    // console.log(items)
    // console.log(lilist) 
    //cant use it as lilist 
    // as lilist is not htmlcollection it will not work
    Array.from(items).forEach(function(item){
        var itemname = item.firstChild.textContent;
        // console.log(itemname)
        if (itemname.toLowerCase().indexOf(text)!=-1){
            item.style.display = "block";
        }else{
            item.style.display="none"
        }
    });
}


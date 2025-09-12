let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click",()=>{
    let item = document.createElement('li');
    item.innerHTML = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

// let delbtns = document.createElement('button');
ul.addEventListener("click",(event)=>{
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log("deleted");
        listItem.remove()
    }   
    else{
        console.log("don't delete");
    }
})

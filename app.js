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
        console.log("delete");
    }   
    else{
        console.log("don't delete");
    }
})

var increment = ()=>{
    var num = parseInt(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = num + 1;
}  

var decrement = ()=>{
    var num = parseInt(document.getElementById("counter").innerText);
    if (num >0)
        document.getElementById("counter").innerText = num - 1;
} 

var reset = () =>document.getElementById("counter").innerText =0;

var save = () =>{
    var num = parseInt(document.getElementById("counter").innerText);
    document.getElementsByTagName("span")[0].innerHTML = num;
    reset();   
}

var bg = document.querySelector(".bgcolor");

bg.addEventListener("click", ()=> document.body.style.backgroundColor = "darkcyan");

bg.style.paddingTop = "20px";

var menu = document.querySelector("img");
var item = document.querySelector(".nav_item");

menu.addEventListener("click", ()=>{
    console.log("clicked");
    item.style.display = "flex";
} );








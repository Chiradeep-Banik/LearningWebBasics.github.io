var burger = document.querySelector(".item.burger");
var a_tag = document.querySelectorAll("span");
var sidebar = document.querySelector(".sidebar");
var theme = document.querySelector(".item.bottom");
var main = document.querySelector(".main");
var body = document.querySelector("body");

burger.addEventListener("click", ()=>{
    if (a_tag[1].style.display =="block") {
        for (let i = 0; i < a_tag.length; i++) {
            a_tag[i].style.display = "none";
        }
        sidebar.style.minWidth="45px";
        main.style.paddingLeft="50px";
    }else{
        for (let i = 0; i < a_tag.length; i++) {
            a_tag[i].style.display = "block";
        }
        sidebar.style.minWidth="85px";
        main.style.paddingLeft="90px";
    }
});

theme.addEventListener("click" , ()=>{
    if(main.style.backgroundColor == "white")
        main.style.backgroundColor = "rgba(0, 0, 0, 0.39)";
    else
        main.style.backgroundColor = "white";
});
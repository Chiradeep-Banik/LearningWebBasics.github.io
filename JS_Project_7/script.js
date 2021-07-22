var modal = document.querySelector(".modal");
var overlay = document.querySelector("#overlay");
var close_btn = document.querySelector(".close_modal");
var open_btn = document.querySelector(".open_modal");

open_btn.addEventListener("click",()=>{
    if(overlay.classList.contains("active") == false && modal.classList.contains("active") == false){
        modal.classList.add("active");
        overlay.classList.add("active");
    }
});
close_btn.addEventListener("click",()=>{
    if(overlay.classList.contains("active") != false && modal.classList.contains("active") != false){
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
});
overlay.addEventListener("click",()=>{
    if(overlay.classList.contains("active") != false && modal.classList.contains("active") != false){
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
});

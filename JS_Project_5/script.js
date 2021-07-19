var toggle_bar = document.querySelector(".toggle");
var items = document.querySelectorAll(".item");
var other_items = document.querySelectorAll(".other_item");

toggle_bar.onclick = ()=>{
    if(window.innerWidth < 768 && window.innerWidth > 568){
        for(var i = 0; i < other_items.length; i++){
            if(other_items[i].style.display == "block"){
                other_items[i].style.display = "none";
            }else{
                other_items[i].style.display = "block";
            }
        }
    }
    if(window.innerWidth < 568){
        for(var i = 0; i < items.length; i++){
            if(items[i].style.display == "block"){
                items[i].style.display = "none";
            }else{
                items[i].style.display = "block";
            }
        }
    }
}
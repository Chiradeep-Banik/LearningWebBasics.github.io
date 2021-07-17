var color = "#A23456";
var hex_arr = [];
for (var i = 0; i < 10; i++){
    hex_arr.push(i);
}
hex_arr.push("A");
hex_arr.push("B");
hex_arr.push("C");
hex_arr.push("D");
hex_arr.push("E");
hex_arr.push("F");

var random = ()=>{
    return Math.floor(Math.random()*hex_arr.length);
}

var bgcolor = document.querySelector("body");
var change_btn = document.querySelector("#change_btn");
var main_text = document.querySelector("#main_Text");

change_btn.addEventListener("click",()=>{
    var clr ="#";
    for(let i = 1 ; i <7 ; i++){
        clr = clr + hex_arr[random()];
    }
    bgcolor.style.backgroundColor = clr;
    change_btn.style.backgroundColor = clr;
    main_text.innerHTML= "Current Back-Ground Color :".concat(clr); 
});






var ans = document.querySelectorAll('.ans');
var btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', ()=>{
        if(ans[i].classList.contains("active")){
            ans[i].classList.remove("active");
            btns[i].innerHTML = "&#8595";
        }else{
            ans[i].classList.add("active");
            btns[i].innerHTML = "&#8593;";
        }
    });
}
var random = (min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
};

var first_card,second_card,new_card,my_sum,dealer_sum,dealer_card_1,dealer_card_2;
var total_hands_played =0;

var my_card_holder = document.querySelector("#my_card_holder");
var dealer_card_holder = document.querySelector("#dealer_card_holder");
var new_game_btn = document.querySelector("#new_game");
var hit_me_btn = document.querySelector("#hit_me");
var stand_btn = document.querySelector("#stand");
var result = document.querySelector("#result");
var total_hands = document.querySelector("#hands_played");

new_game_btn.onclick = ()=>{
    total_hands_played++;
    total_hands.innerHTML = "Total Hands Played : " + total_hands_played;
    first_card = random(2,11);
    second_card = random(2,11);
    dealer_card_1 = random(2,11);
    my_sum = first_card + second_card;
    my_card_holder.innerHTML = "Your Cards : " +first_card + "  " + second_card;
    dealer_card_holder.innerHTML = "Dealer's Cards : " + dealer_card_1+ "     " + "**";
    result.innerHTML = "";
    hit_me_btn.disabled = false;
    stand_btn.disabled = false;
    if(my_sum == 21){
        result.innerHTML = "You Won -- BLACKJACK";
        hit_me_btn.disabled = true;
        stand_btn.disabled = true;
        return;
    }
};
if(my_card_holder.innerHTML == "Your Cards : "){
    hit_me_btn.disabled = true;
    stand_btn.disabled = true;
}

hit_me_btn.onclick = ()=>{
    var new_card = random(2,11);
    my_card_holder.innerHTML = my_card_holder.innerHTML + "  " + new_card;
    my_sum = my_sum + new_card;
    if(my_sum > 21){
        result.innerHTML = "You are BUST";
        hit_me_btn.disabled = true;
        stand_btn.disabled = true;
        return;
    }
    if(my_sum == 21){
        result.innerHTML = "You Won -- BLACKJACK";
        hit_me_btn.disabled = true;
        stand_btn.disabled = true;
        return;
    }
}

stand_btn.onclick = ()=>{
    dealer_card_2 = random(2,11);
    dealer_sum = dealer_card_1 + dealer_card_2;
    dealer_card_holder.innerHTML = "Dealer's Cards : " + dealer_card_1+ "  " + dealer_card_2;
    if (dealer_sum > my_sum || (dealer_sum <21 && my_sum > 21)){
        result.innerHTML = "Dealer won -- Better luck next time";
        hit_me_btn.disabled = true;
        stand_btn.disabled = true;
        return;
    }
    if((dealer_sum > 21 && my_sum < 21)|| dealer_sum < my_sum){
        result.innerHTML = "You won -- Good job";
        hit_me_btn.disabled = true;
        stand_btn.disabled = true;
        return;
    }
    if (dealer_sum == my_sum){
        result.innerHTML = "Tie -- Try again";
        hit_me_btn.disabled = true;
        stand_btn.disabled = true;
        return;
    }
};


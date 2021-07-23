const data = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth befo.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Pri `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditatio `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo cray`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee li `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyda `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge .`,
    },
];

var card_container = document.querySelector('.card_container');
var all_btn = document.querySelector('#all');
var breakfast_btn = document.querySelector('#breakfast');
var lunch_btn = document.querySelector('#lunch');
var shakes_btn = document.querySelector('#shakes');
var cards = null;
window.addEventListener('DOMContentLoaded',()=>{
    cards = data.map((item)=>{
        return `<div class="card">
                    <div class="card_image">
                        <img src=${item.img} alt=${item.title} height="200px" width = "300px">
                    </div>
                    <div class="title_desc">
                        <div class="title_price">
                        <div class = "title">${item.title}</div>
                        <div class="price">${item.price}</div>
                        </div>
                        <div class="description">
                            ${item.desc}
                        </div>
                    </div>
                </div>`
    });
    card_container.innerHTML = cards.join("");
});

all_btn.addEventListener('click',()=> card_container.innerHTML = cards.join(""));

breakfast_btn.addEventListener('click',()=>{
    var breakfast =[];
    for(var i = 0; i < cards.length; i++){
        if(data[i].category == "breakfast"){
            breakfast.push(cards[i]);
        }
    }
    card_container.innerHTML = breakfast.join("");
});
lunch_btn.addEventListener('click',()=>{
    var lunch =[];
    for(var i = 0; i < cards.length; i++){
        if(data[i].category == "lunch"){
            lunch.push(cards[i]);
        }
    }
    card_container.innerHTML = lunch.join("");
});

shakes_btn.addEventListener('click',()=>{
    var shakes=[];
    for (let i = 0; i < cards.length; i++) {
        if(data[i].category == "shakes") {
            shakes.push(cards[i]);
        }
    }
    card_container.innerHTML = shakes.join("");
});
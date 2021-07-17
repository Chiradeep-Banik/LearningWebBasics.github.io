const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

var rand = ()=> Math.floor(Math.random()*reviews.length);

var image = document.querySelector("#image");
var author = document.querySelector("#author");
var occupation = document.querySelector("#occupation");
var review = document.querySelector("#review");
var prev_btn= document.querySelector("#prev");
var next_btn= document.querySelector("#next");
var random_btn= document.querySelector("#random");

image.src = reviews[0].img;
author.innerText = reviews[0].name;
occupation.innerText = reviews[0].job;
review.innerText = reviews[0].text;

var current_item= 0;

random_btn.onclick =()=>{
    var j = rand();
    image.src = reviews[j].img;
    author.innerText = reviews[j].name;
    occupation.innerText = reviews[j].job;
    review.innerText = reviews[j].text;
    current_item= j;
};

next_btn.onclick =()=>{
    current_item++;
    if(current_item>= reviews.length){
        current_item--;
        return;
    }
    image.src = reviews[current_item].img;
    author.innerText = reviews[current_item].name;
    occupation.innerText = reviews[current_item].job;
    review.innerText = reviews[current_item].text;
};
prev_btn.onclick =()=>{
    current_item--;
    if(current_item<0){
        current_item++;
        return;
    }
    image.src = reviews[current_item].img;
    author.innerText = reviews[current_item].name;
    occupation.innerText = reviews[current_item].job;
    review.innerText = reviews[current_item].text;
};

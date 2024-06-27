// local reviews data
const reviews = [
    {
        id: 1,
        name: "Anisha Li",
        img: "../images/avatar-anisha.png",
        text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”" 
    },

    {
        id: 2,
        name: "Ali Bravo",
        img: "../images/avatar-ali.png",
        text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”" 
    },

    {
        id: 3,
        name: "Richard Watts",
        img: "../images/avatar-richard.png",
        text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”" 
    },

    {
        id: 4,
        name: "Shanai Gough",
        img: "../images/avatar-shanai.png",
        text: "'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'"
    }
];


// Selecting items for the carousel
const img = document.getElementById('person-img');
const author = document.getElementById("author");
const info = document.getElementById("info");
// button items
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
// ==========================================


// Selecting items for the menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
// ==========================================


// MENU
btn.addEventListener("click", (e) => {
    e.stopPropagation();

    btn.classList.toggle("open")
    nav.classList.toggle("flex")
    nav.classList.toggle("hidden")
    nav.classList.remove("absolute")
    nav.classList.add("fixed")
    
});


window.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && e.target !== btn) {
        
        nav.classList.add("hidden");
        nav.classList.remove("flex");
        nav.classList.remove("fixed");
        btn.classList.remove("open");
   } 
});

nav.addEventListener("click", (e) => {
    e.stopPropagation();
})

// ==========================================


// CAROUSEL
// Setting the starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(); 
})

// The Buttons
// next-Btn
nextBtn.addEventListener("click", () => {
    currentItem++;

    
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

// prev-Btn
prevBtn.addEventListener("click", () => {
    currentItem--;

    
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

// randomBtn
randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);

    showPerson();
})


function showPerson() {
    let item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
}
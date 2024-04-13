

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onscroll = function() {myStick()};

var navbar = document.getElementById("navb");
var sticky = navbar.offsetTop;

function myStick() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}
// Selection skills

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const closeEl1 = document.querySelector('#close-1');
const closeEl2 = document.querySelector('#close-2');
const closeEl3 = document.querySelector('#close-3');
const el = document.querySelector('.technical-sckill');
const secondEl = document.querySelector('.second-box')
const thEl = document.querySelector('.th-box')

box1.addEventListener('click', () =>{
    if(el.style.display === 'none'){
        el.style.display = 'block'
    }else{
        el.style.display = 'none'
    }
})
box2.addEventListener('click', () =>{
    if(secondEl.style.display === 'none'){
        secondEl.style.display = 'block'
    }else{
        secondEl.style.display = 'none'
    }
})
box3.addEventListener('click', () =>{
    if(thEl.style.display === 'none'){
        thEl.style.display = 'block'
    }else{
        thEl.style.display = 'none'
    }
})

closeEl1.addEventListener('click', () =>{
    el.style.display = "none"
})
closeEl2.addEventListener('click', () =>{
    secondEl.style.display = "none"
})
closeEl3.addEventListener('click', () =>{
    thEl.style.display = "none"
})











// skillEls.forEach(function(skill) {
//     skill.addEventListener('click', () =>{
//         const brtEl = document.querySelector('.oury');
//         brtEl.style.display = 'block'
//     })
// })
// skillEls.addEventListener('click', () =>{
//     // const el = document.querySelector('.technical-sckill');
//     el.style.display = 'block'
// })

// closeEl.addEventListener('click', () =>{
//     if(el.style.display === 'none'){
//         el.style.display = 'block'
//     }else{
//         el.style.display = 'none'
//     }
// })

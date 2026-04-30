var img = document.getElementById('watch-img')

var c1 = document.getElementById('color-1');
var c2 = document.getElementById('color-2');
var c3 = document.getElementById('color-3');
var c4 = document.getElementById('color-4');
var c5 = document.getElementById('color-5');

var time = document.getElementById('hour');
var timebtn = document.getElementById('timebtn');

let heartdiv = document.getElementById('heartrate');
let heartbtn = document.getElementById('heartbtn');



c1.addEventListener('click', function(){
    img.src = "./images/black.png";
    console.log('watch color black');
});
c2.addEventListener('click', function(){
    img.src = "./images/purple.png";
    console.log('watch color purple');
});
c3.addEventListener('click', function(){
    img.src = "./images/blue.png";
    console.log('watch color blue');
});
c4.addEventListener('click', function(){
    img.src = "./images/PTgQlim.png";
    console.log('watch color red');
});
c5.addEventListener('click', function(){
    img.src = "./images/pink.png";
    console.log('watch color pink');
});
console.log('watch color');

timebtn.addEventListener('click', function(){
    console.log('alert')
})

setInterval(() => {
    const d = new Date();
    time.innerHTML = d.toLocaleTimeString();    
}, 1000);


timebtn.addEventListener('click', () => {
    time.style.display = "block";
    heartdiv.style.display = "none"
});

heartbtn.addEventListener('click', () => {
    heartdiv.style.display = "block";
    time.style.display = "none";
})


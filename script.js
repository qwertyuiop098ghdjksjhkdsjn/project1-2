const mySlides = [
    {
        img: "image/image 2.1.svg",
    },
    {
        img: "image/image 2.png",
    },
    {
        img: "image/image 3.png",
    }
];

const srcImages = [
    {
        img: "image/Rectangle 7.4.svg",
    },
    {
        img: "image/Rectangle 7.3.svg",
    },
]

let slideIndex = 1;
let next = document.getElementsByClassName("s sticklr");
console.log(h5_1);

let dot = document.getElementsByClassName("s dot");

let headline1 = document.getElementById("h5_1");
let headline2 = document.getElementById("h5_2");
let headline3 = document.getElementById("h5_3");

headline1.addEventListener("click", function(){
    showSlides(slideIndex=1)
})

headline2.addEventListener("click", function(){
    showSlides(slideIndex=2)
})

headline3.addEventListener("click", function(){
    showSlides(slideIndex=3)
})


dot[0].addEventListener("click", function(){
    showSlides(slideIndex=1)
})

dot[1].addEventListener("click", function(){
    showSlides(slideIndex=2)
})

dot[2].addEventListener("click", function(){
    showSlides(slideIndex=3)
})



next[0].addEventListener("click", function() {
    showSlides(slideIndex-=1);
});

next[1].addEventListener("click", function() {
    showSlides(slideIndex+=1);

});

function showSlides (n) {

    if (n>mySlides.length) {
        slideIndex = 1;
    }
    if (n<1) {
        slideIndex = mySlides.length;
    }
    let h5_1 = document.getElementById("h5_1");
    let h5_2 = document.getElementById("h5_2");
    let h5_3 = document.getElementById("h5_3");
    let Rostov1 = document.getElementById("Rostov1");
    let m2 = document.getElementById("m2");
    let months = document.getElementById("months"); 
    imgimg = document.getElementById("uszas");
    imgimg.src = mySlides[slideIndex-1].img;
    let dot_1 = document.getElementById("firstdot");
    let dot_2 = document.getElementById("seconddot");
    let dot_3 = document.getElementById("thirddot");
    if (slideIndex == 2)
    {
        dot_2.src = srcImages[0].img;
        dot_1.src = srcImages[1].img;
        dot_3.src = srcImages[1].img;
        h5_1.innerHTML = '<h5 id="h5_1">ROSTOV-ON-DON, ADMIRAL</h5>'
        h5_3.innerHTML = '<h5 id="h5_1">ROSTOV-ON-DON PATRIOTIC</h5>'
        h5_2.innerHTML = '<h5 id="h5_1" class="Rostov-on-Don" style="color: #E3B873;">SOCHI THIEVES<hr></h5>'
        Rostov1.innerHTML = '<p class="p" id="Rostov1">Sochi<br>Thieves</p>'
        m2.innerHTML = '<p class="p" id="m2">105 m2</p>'
        months.innerHTML = '<p class="p" id="months">4 months</p>'
    }
    if (slideIndex == 1)
    {   
        dot_1.src = srcImages[0].img;
        dot_2.src = srcImages[1].img;
        dot_3.src = srcImages[1].img;
        h5_2.innerHTML = '<h5 id="h5_1">SOCHI THIEVES</h5>'
        h5_3.innerHTML = '<h5 id="h5_1">ROSTOV-ON-DON PATRIOTIC</h5>'
        h5_1.innerHTML = '<h5 id="h5_1" class="Rostov-on-Don" style="color: #E3B873;">ROSTOV-ON-DON, ADMIRAL<hr></h5>'
        Rostov1.outerHTML = '<p class="p" id="Rostov1">Rostov-on-Don <br> LCD admiral</p>'
        m2.outerHTML = '<p class="p" id="m2">81 m2</p>'
        months.outerHTML = '<p class="p" id="months">3.5 months</p>'
    }
    if (slideIndex == 3)
    {
        dot_3.src = srcImages[0].img;
        dot_2.src = srcImages[1].img;
        dot_1.src = srcImages[1].img;
        h5_1.innerHTML = '<h5 id="h5_1">ROSTOV-ON-DON, ADMIRAL</h5>'
        h5_2.innerHTML = '<h5 id="h5_1">SOCHI THIEVES</h5>'
        h5_3.innerHTML = '<h5 id="h5_1" class="Rostov-on-Don" style="color: #E3B873;">ROSTOV-ON-DON PATRIOTIC<hr></h5>'
        Rostov1.innerHTML = '<p class="p" id="Rostov1">Rostov-on-Don<br>Patriotic</p>'
        m2.innerHTML = '<p class="p" id="m2">93 m2</p>'
        months.innerHTML = '<p class="p" id="months">3 months</p>'
    }
    
}
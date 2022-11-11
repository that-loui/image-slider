let slides = document.querySelectorAll('.slideshow'),
prev = document.querySelector('#prev'),
next = document.querySelector('#next'),
current = 0;

function reset(){
    for(let i =0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
}

function startSlide(){
    reset()
    slides[0].style.display = 'block';
}

function nextSlide(){
    reset()
    slides[current + 1].style.display = 'block';
    current ++;
    console.log(current)

//     if(current === slides.length){
//         current = 0
//     }
}

next.addEventListener('click' , () =>{
    if(current === slides.length - 1){
        current = -1; 
        console.log(current);
    }
   console.log(current)
    nextSlide()
})


function prevSlide(){
    reset()
    slides[current - 1].style.display = 'block';
    current --;
}

prev.addEventListener('click' , () => {
    if(current  === 0){
        current = slides.length ;
    }
    prevSlide();
})
// console.log(slides.length)
startSlide()
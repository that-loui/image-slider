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

    if(current === slides.length - 1){
        current = -1; 
        console.log(current);
    }
    // console.log(current)
}

next.addEventListener('click' , () =>{
    nextSlide()
})


function prevSlide(){
    reset()
    
    slides[current - 1].style.display = 'block';
    current --;
    
    if(current  === 0){
        current = slides.length ;
    }
}

prev.addEventListener('click' , () => {
       prevSlide();
})
// console.log(slides.length)
startSlide(slides)
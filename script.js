let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let steps = document.querySelectorAll(".step");
let progress = document.querySelector(".progress-bar");
let numStep = 1


btnNext.addEventListener('click', function() {
    numStep++
    update()
})

btnPrev.addEventListener('click', function() {
    numStep--
    update()
})

function update() {
    steps.forEach((step,index) => {
        if( index < numStep ) {
            step.classList.add("active")
        }else {
            step.classList.remove("active")
        }
    })
    
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'

    if (numStep === 1) {
        btnPrev.disabled = true
    }else if(numStep === steps.length) {
        btnNext.disabled = true
    }else {
        btnPrev.disabled = false
        btnNext.disabled = false
}

}
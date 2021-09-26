const progressBar = document.getElementById('progress-bar')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const steps = document.querySelectorAll('.step')

let currentStep = 1

nextBtn.addEventListener('click', () => {
    currentStep++;
    console.log(currentStep, steps.length)
    if(currentStep > steps.length){
        currentStep = steps.length
    }
    updateProgress()
})

prevBtn.addEventListener('click', () => {
    currentStep--;
    console.log(currentStep, steps.length)
    if(currentStep < 1){
        currentStep = 1
    }
    updateProgress()
})

function updateProgress(){
    nextBtn.disabled = (currentStep >= steps.length) ? true : false
    prevBtn.disabled = (currentStep > 1) ? false : true

    steps.forEach((step, index) => {
        if(index < currentStep){
            step.classList.add('active')
        }else{
            step.classList.remove('active')
        }
    })

    const activeSteps = document.querySelectorAll('.active')
    progressBar.style.width = `${(activeSteps.length - 1) / (steps.length - 1) * 100}%`
}
const questions = [
    {
        question: "1+1=?",
        options: {
            a: "2",
            b: "3",
            c: "4",
            d: "5",
        },
        correct: "a"
    },
    {
        question: "4+1=?",
        options: {
            a: "2",
            b: "3",
            c: "4",
            d: "5",
        },
        correct: "d"
    },
]

const quiz = document.getElementById('quiz')

const questionEl = document.getElementById('question')
const optionsEl = document.getElementById('options')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz(){
    deselectAnswers()

    const currentQuizData = questions[currentQuiz]

    questionEl.innerText = currentQuizData.question

    optionsEl.innerHTML = Object.keys(currentQuizData.options).map(option_id => {
        return `
            <li>
            <input type="radio" name="answer" id="${option_id}" class="answer" />
            <label for="${option_id}" id="${option_id}_text">${currentQuizData.options[option_id]}</label>
            </li>
        `
    }).join('')

    
}

function deselectAnswers(){
    const answerEls = document.querySelectorAll('.answer')
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    const answerEls = document.querySelectorAll('.answer')

    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer, questions[currentQuiz].correct)
    if(answer){
        if(answer === questions[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < questions.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>You've answered correctly at ${score} / ${questions.length}</h2>
                <button onclick="location.reload()">Retry Quiz</button>
            `
        }
    }
})
const questions = [
    {
        question: 'Which is the largest Mammal in the world?',
        answers: [
            { text: 'Elephant', correct: false},
            { text: 'Giraffe', correct: false},
            { text: 'Blue Whale', correct: true},
            { text: 'Hippo', correct: false}
        ]
    },
    {
        question: 'Which is the largest Ocean in the world?',
        answers: [
            { text: 'Pacific Ocean', correct: true},
            { text: 'India Ocean', correct: false},
            { text: 'Southern Ocean', correct: false},
            { text: 'North Atlantic', correct: false}
        ]
    },
    {
        question: 'Which is the largest Continent in the world?',
        answers: [
            { text: 'Africa', correct: false},
            { text: 'Asia', correct: true},
            { text: 'Antarctica', correct: false},
            { text: 'Europe', correct: false}
        ]
    },
    {
        question: 'Which country has the most number of time zones in the world?',
        answers: [
            { text: 'France', correct: true},
            { text: 'China', correct: false},
            { text: 'Russia', correct: false},
            { text: 'India', correct: false}
        ]
    },
]

const questionElement = document.getElementById( "question");
const answerOptions = document.getElementById( "answer-options" );
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex;
let score;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(ans =>{
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = ans.text;
        answerOptions.appendChild(button);

        if(ans.correct){
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectOption)
    })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerOptions.firstChild){
        answerOptions.removeChild(answerOptions.firstChild);
    }
}

function selectOption(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    } else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerOptions.children).forEach(btn =>{
        if(btn.dataset.correct === 'true'){
            btn.classList.add('correct');
        }
        btn.disabled = true;
    });
    nextButton.style.display = 'block'
}

function showResult(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Start Again'
    nextButton.style.display = "block";
}

function handleNextbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    } else{
        showResult();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbtn();
    } else{
        startQuiz();
    }
})

startQuiz();
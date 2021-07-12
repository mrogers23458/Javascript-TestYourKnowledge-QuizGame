let startButton = document.getElementById('startBtn')
let qDisplay = document.getElementById('qContent')
let pickA = document.getElementById('optionA')
let pickB = document.getElementById('optionB')
let pickC = document.getElementById('optionC')
let pickD = document.getElementById('optionD')
let score = 0

let messageScore = function(){
    document.querySelector('.scoreOverlay').setAttribute('style', 'display: block;')
    document.getElementById('numberCorrect').textContent = score;
    document.getElementById('numberWrong').textContent = ((qArray.length)-(score))
    
}

function renderQuestions(){
    document.querySelector('.questions').setAttribute('style', 'display: flex;')
    currenQuestion = qArray[setQuestion]
    qDisplay.textContent = currenQuestion.question
    pickA.textContent = currenQuestion.choiceA
    pickB.textContent = currenQuestion.choiceB
    pickC.textContent = currenQuestion.choiceC
    pickD.textContent = currenQuestion.choiceD

    return;
}


let qArray = [
    {
        question: "What does JS stand for?",
        choiceA: "Javascript",
        choiceB: "Junctionscript",
        choiceC: "Java Source",
        choiceD: "Jumbo Shrimp",
        correct: "A"

    },{
        question: "All of the following can be used to declare a variable EXCEPT",
        choiceA: "const",
        choiceB: "let",
        choiceC: "var",
        choiceD: "myVariable",
        correct: "D"
    },{
        question: "Where should the <script></script> go in the HTML document?",
        choiceA: "at the very bottom of the <body>",
        choiceB: "in a <div> tag neara the header",
        choiceC: "In the <head> tag",
        choiceD: "Anywhere because Javascript doesn't have an order",
        correct: "A"
    }
]

let setQuestion = 0
let currenQuestion = []
console.log(currenQuestion)

function checkAnswer(value){
    
    currenQuestion = qArray[setQuestion]
    
    if(value === currenQuestion.correct) {
        console.log('correct');
        setQuestion ++;
        score ++;
    }else {(console.log('wrong'))
        setQuestion ++;}

    if(setQuestion == qArray.length){
        messageScore();
        
        return;
    }
    
    console.log(setQuestion)
    console.log(currenQuestion)

    renderQuestions();
    
}


let timer = document.querySelector('.time')

function beginGame(){
    let secondsLeft = 20
    document.querySelector('.scoreOverlay').setAttribute('style', 'display: none;')
    setQuestion = 0
    score = 0
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft

        if(secondsLeft === 0){
            clearInterval(timerInterval) 
            messageScore()}
        
        if(setQuestion == qArray.length){
            clearInterval(timerInterval)
        }

        

    }, 1000);

    renderQuestions();
    
}


startButton.addEventListener('click', beginGame)
console.log(setQuestion)
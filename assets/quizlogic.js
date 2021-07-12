let startButton = document.getElementById('startBtn')
let qDisplay = document.getElementById('qContent')
let pickA = document.getElementById('optionA')
let pickB = document.getElementById('optionB')
let pickC = document.getElementById('optionC')
let pickD = document.getElementById('optionD')

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
    }else {(console.log('wrong'))
        setQuestion ++;}

    if(setQuestion == qArray.length){
        document.querySelector('.questions').setAttribute('style', 'display: none;')
        return;
    }
    
    console.log(setQuestion)
    console.log(currenQuestion)

    qDisplay.textContent = currenQuestion.question
    pickA.textContent = currenQuestion.choiceA
    pickB.textContent = currenQuestion.choiceB
    pickC.textContent = currenQuestion.choiceC
    pickD.textContent = currenQuestion.choiceD
    
}

let secondsLeft = 90
let timer = document.querySelector('.time')
let messageScore = function(){
    console.log('works after timer expires')
}

function beginGame(){
    setQuestion = 0
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft

        if(secondsLeft === 0){
            clearInterval(timerInterval) 
            messageScore()
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

        renderQuestions();

    }, 1000);
    
}


startButton.addEventListener('click', beginGame)
console.log(setQuestion)


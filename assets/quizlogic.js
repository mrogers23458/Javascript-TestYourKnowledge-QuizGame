let startButton = document.getElementById('startBtn')

let secondsLeft = 10
let timer = document.querySelector('.time')
let messageScore = function(){
    console.log('works after timer expires')
}

function beginGame(){
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time left: " + secondsLeft

        if(secondsLeft ===0){
            clearInterval(timerInterval)
            messageScore()
        }

    }, 1000);

    let renderQuestions = function(){
        document.querySelector('.questions').setAttribute('style', 'display: flex;')
    }
    renderQuestions();

}


startButton.addEventListener('click', beginGame)
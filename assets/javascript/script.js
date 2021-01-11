
// When I click the start button a timer starts and I am presented with a question
// When I answer a question I am presented with another question 
// When I answer a question incorrectly time is subtracted from the clock
// When all questions are answered or the timer reaches 0 the game is over
// When the game is over I can save my initials and score


// array of questions

var counter;
counter = 0;  

var myQuestions = [
    {
        question: "What is a web-development language?",
        answers: {
            a: 'HTML',
            b: 'CSS',
            c: 'JavaScript',
            d: 'All of the Above!'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is repeating code called?",
        answers: {
            a: 'A loop',
            b: 'A bug',
            c: 'A string',
            d: 'A variable'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is an error in a program called?",
        answers: {
            a: 'A loop',
            b: 'A bug',
            c: 'A string',
            d: 'A variable'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is a sequence of characters called?",
        answers: {
            a: 'A loop',
            b: 'A bug',
            c: 'A string',
            d: 'A variable'
        },
        correctAnswer: 'a'
    },
]



// timer
var timeLeft = 75
var timer = document.getElementById("timer")
timer.innerHTML = timeLeft;

// button onclick
var button = document.getElementById("startQuiz")
button.addEventListener("click", function() {
    
    var clock = setInterval(function(){ 
        
        timeLeft--;
        timer.innerHTML = timeLeft;
        if (timeLeft === 0) {
            clearInterval(clock);
        }

    }, 1000);

    var welcome = document.getElementById("welcome");
    welcome.classList.add("hidden");

    var questions = document.getElementById("questions");
    
    // Put question content
    var questionText = document.getElementById("questionText");
    questionText.innerHTML = myQuestions[counter].question;
    
    var option1 = document.getElementById("option1");
    option1.innerHTML = myQuestions[counter].answers.a;
    
    var option2 = document.getElementById("option2");
    option2.innerHTML = myQuestions[counter].answers.b;
    
    var option3 = document.getElementById("option3");
    option3.innerHTML = myQuestions[counter].answers.c;
    
    var option4 = document.getElementById("option4");
    option4.innerHTML = myQuestions[counter].answers.d;
    
    var options = document.querySelectorAll("#options li");
    options.forEach(function(optionItem){
        optionItem.onclick = function(obj){
            
            
            var userChoice = obj.target.innerText;
            var correctChoice = myQuestions[counter].correctAnswer;
            var correctChoiceText = myQuestions[counter].answers[correctChoice];
            var resultHtml = document.getElementById("result");
            
            if (userChoice === correctChoiceText){
                 counter = counter++;   
                resultHtml.innerText = "Correct!";

            }else{
                counter = counter++;
                resultHtml.innerText = "Incorrect..."; 
            }
        }
    });  
    questions.classList.remove("hidden");

   

});

   
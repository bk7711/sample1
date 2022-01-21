var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices")
var choiceEl = document.querySelector(".choice");
var choiceA = document.querySelector("#a");
var choiceB = document.querySelector("#b");
var choiceC = document.querySelector("#c");
var choiceD = document.querySelector("#d");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var correctEl = document.querySelector("#correct");
var incorrectEl = document.querySelector("#incorrect");
var scoreEl = document.querySelector("#score");
var resultEl = document.querySelector("#result");
var highscoresEl = document.querySelector(".highscores");
var timerEl = document.getElementById('timer');
var currentQuestion = 0;

var secondsLeft = 20;

var correctEl=0;
var incorrectEl = 0;
var scoreEl = 0;

//Questions are from http://mcqspdfs.blogspot.com/2013/08/60-top-javascript-multiple-choice.html

//Question bank
//whole question bank is an array
//each question is an object
//the answers are objects
var bank = [
    {question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers:[
        "A.  The User's machine running a Web browser",
        "B.  The Web server",
        "C.  A central machine deep within Netscape's corporate offices",
        "D.  None of the above",
    ],
    correctAnswer: "a"
    },

    {question: "What are variables used for in JavaScript Programs?",
    answers:[
        "A.  Storing numbers, dates, or other values",
        "B.  Varying randomly",
        "C.  Causing high-school algebra flashbacks",
        "D.  None of the above",
    ],
    correctAnswer: "a"
    },

    {question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    answers:[
        "A.  Client-side",
        "B.  Server-side",
        "C.  Local",
        "D.  Native",
    ],
    correctAnswer: "a"
    },

    {question: "Which of the following are capabilities of functions in JavaScript?",
    answers:[
            "A.  Return a value",
            "B.  Accept parameters and Return a value",
            "C.  Accept parameters",
            "D.  None of the above",
    ],
    correctAnswer: "c"
    },

    {question: "Which of the following is not a valid JavaScript variable name?",
    answers:[
        "A.  _first_and_last_names",
            "B.  2names",
            "C.  FirstAndLast",
            "D.  None of the above",
    ],
    correctAnswer: "b"
    },

    {question: "What is the correct syntax for referring to an external script called ' abc.js'?",
    answers:[
        "A. <script href=' abc.js'>",
            "B. <script name=' abc.js'>",
            "C. <script src=' abc.js'>",
            "D. None of the above",
    ],
    correctAnswer: "c"
    },

    {question: "Which types of image maps can be used with JavaScript?",
    answers:[
            "A.  Server-side image maps",
            "B.  Client-side image maps",
            "C.  Server-side image maps and Client-side image maps",
            "D.  None of the above",
    ],
    correctAnswer: "b"
    },

    {question: "Which is the correct way to write a JavaScript array?",
    answers:[
            "A.  var txt = new Array(1:'tim',2:'kim',3:'jim')",
            "B.  var txt = new Array:1=('tim')2=('kim')3=('jim')",
            "C.  var txt = new Array('tim','kim','jim')",
            "D.  var txt = new Array='tim','kim','jim'",
    ],
    correctAnswer: "c"
    },

    {question: "JavaScript entities start with _______ and end with _________.",
    answers:[
            "A.  Semicolon, colon",
            "B.  Semicolon, Ampersand",
            "C.  Ampersand, colon",
            "D.  Ampersand, semicolon",
    ],
    correctAnswer: "d"
    },

    {question: "Which of the following is the structure of an if statement?",
    answers:[
            "A.  if (conditional expression is true) thenexecute this codeend if",
            "B.  if (conditional expression is true)execute this codeend if",
            "C.  if (conditional expression is true)   {then execute this code>->}",
            "D.  if (conditional expression is true) then {execute this code}",
    ],
    correctAnswer: "c"
    },

    {question: "The _______ method of an Array object adds and/or removes elements from an array.",
    answers:[
            "A.  Reverse",
            "B.  Shift",
            "C.  Slice",
            "D.  Splice",
    ],
    correctAnswer: "d"
    },
]
//set timer on page
var countdown = function(){
    secondsLeft = 20;
    //count down on timer
    var timer = setInterval(function(){
    timerEl.innerHTML = secondsLeft;
    
    
        if(secondsLeft > -1){
            
            secondsLeft --;
        }else{
            //clear the interval
            clearInterval(timer);
            alert("Your time is up! Let's see your score");
            timerEl.innerHTML = 0;
        }
            
    }, 1000);
};
//filter through and display question answer choices
// var getChoices = function(){
//     for(i = 0; i < 4; i++){
//         choiceA.textContent = 
//     }
// }
//show questions for the quiz
var pullQuestions = function(){
    for (index = 0; index < bank.length; index++){
        questionsEl.innerHTML = "<p>" + bank[index].question + "<p/>";
        
        
    }
}



//user clicks start
startEl.addEventListener("click", function(){
    //timer starts counting down
    startEl.setAttribute("data-stat", "hidden");
    countdown();
    
    //first question appears
    pullQuestions();
    //capture the event (item chosen)

    //check the event to the correct Answer

            
    //tell user correct or incorrect
            //if wrong answer chosen, subtract from timer

            //if correct answer chosen, add to points
})

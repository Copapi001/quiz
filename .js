// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scorreContainer");
// create questions
let questions = [
    {
        question : "What date did Nigeria confirm her first index of Covid-19?",
        choiceA : "27th Feb, 2020",
        choiceB : "24th Feb, 2020",
        choiceC : "26th Feb, 2020",
        Correct : "A"
    }, {
        question : "Nigeria's first death due to Covid-19 was recorded when?",
        choiceA : "March 21st, 2020",
        choiceB : "March 23rd, 2020",
        choiceC : "March 24th, 2020",
        Correct : "B"
    }, {
        question :"A team of how many Chinese doctors arrived Nigeria in April?",
        choiceA : "13",
        choiceB : "15",
        choiceC : "12",
        Correct : "B"
    }, {
        question : "During the pandemic in Nigeria, the President's usual time to address the country is?",
        choiceA : "6pm",
        choiceB : "8pm",
        choiceC : "7pm",
        Correct : "C"
    }, {
        question : "As at 12:00am , 3rd of May,2020 , Nigeria had a total of how many cases?",
        choiceA : "2556",
        choiceB : "2368",
        choiceC : "2558",
        Correct : "C"
    }
]
  // create variables

        const lastQuestion = questions.length -1;
        let runningQuestion = 0;
        let count = 0;
        const questionTime = 10; // 10s
        const gaugeUnit = gaugeWidth / questionTime;
        let TIMER;
        let score = 0;

        // render question
        function renderQuestion(){
        let q = questions[runningQuestion];

        question.innerHTML = "<p>"+ q.question +"</p";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
  }

  start.addEventListener("click",startQuiz);

// start quiz
  function startQuiz(){
      start.style.display = "none";
      renderQuestion();
      quiz.style.display = "block";
      renderProgress ();
      renderCounter();
      TIMER = setInterval(renderCounter, 1000); //1000ms = 10s
  } 

// render progress
  function renderProgress();
     for (let qindex = 0; qindex <= lastQuestion; qindex++) {
        progress.innerHTML += "div class='prog' id="+ qindex +"></div>";
     }
 }

// counter render 
  
  function renderCounter(){
      if(count <= questionTime){
          counter.innerHTML = count;
          timeGauge.style.width = count * gaugeUnit +"px";
          count++
      }else{
          count = 0
          // change progress colour to red
          answerIsWrong();
          if(runningQuestion < lastQuestion){
              runningQuestion++;
              renderQuestion();
          }else{
              // end the quiz and show time score
              clearInterval(TIMER);
              scoreRender();
          }
      }
  }
  
// check answer

function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress to green
        answerIsCorrect
    }else{
        // answer is wrong
        // change progress colour to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        //end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor ="#0f0";
}

//answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor ="#f00";
}

//score render
function scoreRender(){
    scoreDiv.style.display ="block";

    //calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100* score/questions.length);

    scoreDiv.innerHTML = "<p>"+ scorePerCent +"%</p";
}


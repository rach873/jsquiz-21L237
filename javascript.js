const q=[
{
     question: "1) Which type of JavaScript language is ___?",
    answers: [
     {text:"Object-Oriented",correct:false},
    {text: "Object-Based",correct:true},
     {text: "Assembly-language",correct:false},
    {text:"High-level",correct:false},
]
    },
  {
   question:"2)Arrays in JavaScript are defined by which of the followingstatements?",
    answers: [
     {text:"It is an ordered list of values",correct:true},
      {text:"It is an ordered list of objects",correct:false},
      {text:"It is an ordered list of string",correct:false},
     {text:"It is an ordered list of functions",correct:false},
   ]
},
{
    question:"3) Which of the following is not javascript data types?",
    answers: [
    {text:"Null type",correct:false},
    {text:"Undefined type ",correct:false},
    {text:"Number type",correct:false},
     {text:"All of the mentioned",correct:true},

    ]
},
{
    question:"4) Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answers: [
    {text: Position,correct:false},
    {text:Window,correct:true},
    {text:Standard,correct:false},
    {text:Location,correct:true},
    
    ]
}
    ];
    const questionElement = document.getElementById(questio);
const answerbuttons = document.getElementById(answer-buttons);
const nextbutton = document.getElementById(next-btn);
let currentquestionindex=0;
let score=0;
function startquiz()
{
 currentquestionindex=0;
score=0;
    nextbutton.innerHTML=Next&quot;;
    showquestion();
}
function showquestion(){
   resetState();
    let currentquestion = questions[currentquestionindex];
     let quesno=currentquestionindex +1;
    questionElement.innerHTML=questionNo + ". "+ currentquestion.
    question;
currentquestion.answers.forEach(answer => {
     const button= document.createElement(button);
     button.innerHTML=answer.text;
    button.classList.add(btn);
    answerbuttons.appendChild(button);
    if(answer.correct){
    button.dataset.correct=answer.correct;
}
    button.addEventListener(click,selectAnswer);
    });
}
function resetState()
{
nextbutton.style.display=none;
while(answerbuttons.firstChild)
{
answerbuttons.removeChild(answerButtons.firstChild);
 }
}
function selectanswer(e){
 const selectedbtn=e.target;
 const isCorrect=selectedbtn.dataset.correct === true&quot;;
 if(isCorrect)
{
selectedbtn.classList.add(correct);
 score++;
}
else{
    selectedbtn.classList.add(incorrect);
    }
     Array.from(answerbuttons.children).forEach(button =>{
     if(button.dataset.correct=== true){
    button.classList.add( correct);
            }
            button.disabled=true;
        });
    nextbutton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of
${questions.length}!`;
    nextbutton.innerHTML = "play Again";
    nextbutton.style.display="block";
}
function handlenextbutton()
{
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showquestion();
    }
else{
        shoeScore();
    }
}
nextbutton.addEventListener("click",()=>{
        if(currentquestionindex < questions.length)
    {
            handlenextbutton();
        }
        else{
            startquiz();
        }
    });
    startquiz();

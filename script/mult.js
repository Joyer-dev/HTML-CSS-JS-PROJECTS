const buttonElement=document.querySelector('.btn');
const scoreElement=document.querySelector('.score');
const inputElement=document.querySelector('.input');
const textElement=document.querySelector('.text');
 let score=0;
 let currentQuestion={num1:1,num2:3};
 function updateQuestion(){
    const newQuestion=`What is ${currentQuestion.num1} multiply by ${currentQuestion.num2}?`;
    textElement.textContent=newQuestion;

 }
 function checkAnswer(){
    const userAnswer=parseInt(inputElement.value);
    const correctAnswer=currentQuestion.num1*currentQuestion.num2;
    if (userAnswer===correctAnswer){
        score++;
    }else{
        score--;
    }
    inputElement.value='';
    generateQuestion();
    
 }
function generateQuestion(){
    const num1=Math.floor(Math.random()*10)+1;
    const num2=Math.floor(Math.random()*10)+1;
    currentQuestion={num1,num2};
    updateQuestion();
    scoreElement.textContent=`score: ${score}`

}
updateQuestion();

buttonElement.addEventListener('click',checkAnswer);
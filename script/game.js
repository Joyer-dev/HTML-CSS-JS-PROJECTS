const rockEl=document.querySelector('.rock');
const paperEl=document.querySelector('.paper');
const scissorEl=document.querySelector('.scissor');
const resultEl=document.querySelector('.result');
const scoreEl=document.querySelector('.score');
const score=
            {wins:0,
                ties:0,
                looses:0

            }
function Play(playerMove){
    const randomNumber=Math.random();
    let computerMove='';
    if(randomNumber<1/3){
        computerMove='rock';
    }
   else if(randomNumber<2/3){
        computerMove='paper';
    }
    else{
        computerMove='scissor';
    }
    let result='';
    if(computerMove===playerMove){
        result='Tie';
        
    }
    else if((playerMove==='paper'&&computerMove==='rock')||
            ( playerMove==='rock'&&computerMove==='scissor')||
            ( playerMove==='scissor'&& computerMove==='paper'))
            {
                result=`You win! ${playerMove} beats ${computerMove}`
                
             }else{
                result=`You loose! ${computerMove} beats ${playerMove}`
            
             }
             updateScore(result,playerMove,computerMove);
             resultEl.innerHTML=result;
            }
            
        
        
        function setScore(){
            
            scoreEl.innerHTML=`Your Score:${score.wins} computer Score:${score.looses}`;
        }
        function updateScore(result,playerMove,computerMove){
            if(result===`You win! ${playerMove} beats ${computerMove}`){
                score.wins+=1;
            }
            if(result===`You loose! ${computerMove} beats ${playerMove}`){
                score.looses+=1;
            }
            if(result==='Tie'){
                score.ties+=1;
            }
        setScore();
        }
        rockEl.addEventListener("click", () => Play('rock'));
        paperEl.addEventListener("click", () => Play('paper'));
        scissorEl.addEventListener("click", () => Play('scissor'));
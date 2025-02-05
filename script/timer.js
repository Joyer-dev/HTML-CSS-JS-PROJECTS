
    const startElement=document.querySelector('.button1');
    const stopElement=document.querySelector('.button2');
    const resetElement=document.querySelector('.button3');
    const timeElement=document.querySelector('.time');
let interval;
let timeLeft=1500;
function updateTimer(){
    let minutes= Math.floor(timeLeft/60);
    let seconds=(timeLeft%60);
    let formattedTime=`${minutes.toString().padStart(2, "0")}:${seconds
    .toString().padStart(2, "0")}`;
timeElement.innerHTML=formattedTime;
}

    function startTimer(){

    interval=setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft===0){
            clearInterval(interval);
            alert("Time's up!");
            timeLeft=1500;
            updateTimer();
        }
    },1000);
}
    function stopTimer() {
        clearInterval(interval);
      }
    function resetTimer(){
        clearInterval(interval);
        timeLeft=1500;
        updateTimer();
    }
    startElement.addEventListener("click",startTimer);
    stopElement.addEventListener("click",stopTimer);
    resetElement.addEventListener("click",resetTimer);
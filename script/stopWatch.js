 const startEl=document.querySelector('.button1');
 const stopEl=document.querySelector('.button2');
 const resetEl=document.querySelector('.button3');
 const timertEl=document.querySelector('.timer'); 
 let interval;
 let timeleft=0;
 function updateTimer(){
   let hours=Math.floor(timeleft/(1000*60*60));
   let minutes=Math.floor(timeleft/(1000*60)%60);
   let seconds=Math.floor(timeleft/(1000)%60);
   let milliseconds=Math.floor((timeleft%1000)/10);


    let formattedTimer=`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:
    ${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
    timertEl.innerHTML=formattedTimer;
 }
 function startTimer(){
    interval = setInterval(() => {
       timeleft +=10;
        updateTimer();
    }, 10);
}

 function stopTimer(){
    clearInterval(interval);
 }
 function resetTimer(){
    clearInterval(interval);
    timeleft=0;
    updateTimer();
    
 }
 startEl.addEventListener("click",startTimer);
 stopEl.addEventListener("click",stopTimer);
 resetEl.addEventListener("click",resetTimer);
 
 

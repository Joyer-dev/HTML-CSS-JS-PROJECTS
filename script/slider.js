const testmonials=[
    {
    name:"Joan Maurice",
    photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtgUZitNPhU2-Kd0pwROB6X5hiWQfeN6HUg&s",
    text:"I am thanking God for being this beautiful and still Have a luxury life. He has done a lot for me. "
},
{
    name:"Vanilla Jordan",
    photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhg_7TDU7WW2AJbT8kslIuTfRGA9HglWrUrnVUXW-2r5j4YpEBxtnej3Lp5LF1Dqgvmk&usqp=CAU",
    text:" God has being my shield and protector.I have being suffer to  almost death ,he healed me and now I am cancer free. "
},
{
    name:"Mary Arison",
    photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSX2fsjKYBs__2r0Kk9D6kbu7M-T3GaSVStA&s",
    text:"God has protect my family from difficulytimes that we faced.He has never failed us.I am grateful for his love and grace.  "
}];

const imag=document.querySelector('img');
const message=document.querySelector('.text');
const user=document.querySelector('.username');


let index=0;

updateInfo();

function updateInfo(){
const {name,photoUrl,text}=testmonials[index];

imag.src=photoUrl;
message.innerText=text;
user.innerText=name;
index++;
if(index===testmonials.length){
    index=0;
}


setTimeout( ()=>{
    updateInfo();
},10000);
}
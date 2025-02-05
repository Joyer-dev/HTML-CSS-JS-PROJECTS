const inputElement= document.querySelector('.height-input');
const inptElement= document.querySelector('.weight-input');
const textElement=document.querySelector('.txt');
const buttonElement=document.querySelector('.butn');
const infoElement=document.querySelector('.info');
function calculateWeight(){
    const weightInKg=parseFloat(inptElement.value);
    const heightIncm=parseFloat(inputElement.value);
    const heightInM=heightIncm/100;
    const bmi=(weightInKg/(heightInM*heightInM));
    if(bmi>=18.5 && bmi<=24.9){
        infoElement.innerHTML=`Your Condition:Normal`
    }else if(bmi<18.5){
        infoElement.innerHTML=`Your Condition:underWeight`
    }else if(bmi>=25 && bmi<=29.9){
        infoElement.innerHTML=`Your Condition:overWeight`
    }else if(bmi>=30){
        infoElement.innerHTML=`Your Condition:obesity`
    }

textElement.value=`${bmi}`;
}
buttonElement.addEventListener('click',calculateWeight);
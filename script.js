const digitalClock= document.querySelector('.digitalClock');
const CurrentDate= document.querySelector('.currentDate');
const secHand = document.querySelector('.threeHands.first');
const minHand = document.querySelector('.threeHands.second');
const hourHand = document.querySelector('.threeHands.third');

function handleTime(){
    let today = new Date();
    let CurrentTime = today.toLocaleString('en-US',{hour:"2-digit",minute:'2-digit',second:'2-digit'}).replaceAll(':',' : ');
    digitalClock.textContent = CurrentTime;
    let getDate = today.toLocaleString('en-gb',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
    CurrentDate.textContent = getDate;
    let hours = today.getHours();    
    let minutes = today.getMinutes();    
    let seconds = today.getSeconds();    

    let hourDeg = (hours%12)*30 + minutes*0.5;
    let minDeg = minutes*6 + seconds*0.1;
    let secDeg = seconds*6;
    secHand.style.transform=`rotate(${secDeg}deg)`;
    minHand.style.transform=`rotate(${minDeg}deg)`;
    hourHand.style.transform=`rotate(${hourDeg}deg)`;  
}
handleTime();
setInterval(() => handleTime(),1000);

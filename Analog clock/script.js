const secondsHand =document.querySelector("#second-hand");
const minutesHand = document.querySelector("#minute-hand");
const hoursHand = document.querySelector("#hours-hand");

// console.log(secondsHand)

function getTime(){
    let now = new Date();
    let seconds= now.getSeconds();
    let minutes = now.getMinutes();
    let hours =now.getHours();
    let timeInterval =6
    // console.log(seconds,minutes,hours)
    secondsHand.style.transform= "rotate(+"+(seconds*timeInterval) +"deg)";
    minutesHand.style.transform= "rotate(+"+(minutes*timeInterval + seconds/10) +"deg)";          // seconds/10 is to make smoothness
    hoursHand.style.transform = "rotate("+(hours*30+minutes/2)+"deg)";
}

getTime()

setInterval(getTime,100)


const clock = document.getElementById('clock');


setInterval(function(){          // this setInterval function is used to call the function repeditely after certain time
    let date = new Date();
// console.log(date.toLocaleTimeString());

clock.innerHTML = date.toLocaleTimeString();
},1000) 
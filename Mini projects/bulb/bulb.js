var flag = 0;
    var bulb = document.getElementById("bulb");
    var btn = document.querySelector("button");
    var clickSound = document.getElementById("clickSound");

    btn.addEventListener("click", function() {
        if (flag == 0) {
            btn.innerHTML = "OFF";
            bulb.style.backgroundColor = "yellow";
            flag = 1;
        } else {
            btn.innerHTML = "ON";
            bulb.style.backgroundColor = "black";
            flag = 0;
        }
      
       
        clickSound.play();
    });
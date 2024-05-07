const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
   /*  const height = form.height.value;
    const weight = form.weight.value;
    const result = document.querySelector('#result');
    result.innerHTML = `<h3>Your BMI is ${Math.round(weight/(height*height))}</h3>` */ 

    const height = parseInt(document.querySelector('#height').value)   // converting the value from string to number taken from the form
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || isNaN(height) || height < 0 || weight === '' || isNaN(weight) || weight < 0 ){
     result.innerText = `please enter the valid input ${height} : ${weight}`
    } else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        if(BMI < 18.5){
         result.innerText = `Your BMI is ${BMI} and you are underweight`
        }
        else if(BMI >= 18.5 && BMI < 24.9){
            result.innerText =`Your BMI is ${BMI} and you are in Normal Range `
        }
        else if(BMI>=24.9 && BMI < 29.9){
            result.innerText = `Your BMI is ${BMI} and you are overweight`}
        else{
            result.innerHTML =`Your BMI is ${BMI} and you are obese`
        }
    }


})





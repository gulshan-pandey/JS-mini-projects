const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){        
    button.addEventListener("click",function(e){
        let j = getComputedStyle(button).backgroundColor;   //shorthand
        body.style.backgroundColor=j;
    })
})
 



/* buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        
        if(e.target.id ==='grey'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id ==='magenta'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id ==='lightgreen'){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id ==='orange'){
            body.style.backgroundColor= e.target.id;
        }
    })
})
 */



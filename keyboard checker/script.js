let InsertWord = document.querySelector('#insert')
let collection=''
document.addEventListener('keydown',function(e){
    if(e.key==='Backspace'){
        collection=collection.slice(0,-1);
    }
    else if(e.key=='Alt' || e.key=='Shift' || e.key=='Control' || e.key=="CapsLock" || e.key=="Tab"){
       e.preventDefault
    }
    else if(e.key=='Enter'){
        collection+= "<br>"
    }
    else {
        collection+= e.key
    }
    InsertWord.innerHTML = collection
})










let InsertWord = document.querySelector('#insert')
let property = document.querySelector('.prop')
let collection=''
let type=''
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
        type = e.type
    }
    InsertWord.innerHTML = collection
    property.innerHTML=`<table>
    <tr>
      <th>Key</th>
      <th>key code</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key ===' '? 'Space': e.key }</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </table>`
})










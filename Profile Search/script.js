let profile = document.querySelector('#profile')
let search = document.querySelector('input')
let foto= document.querySelector(".foto")

let group =""
let array=[{img: "https://images.unsplash.com/photo-1712869456131-f20d945004cd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"harshita"},
            {img: "https://images.unsplash.com/photo-1662330286867-8cb2a4d7633d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"janki"},
            {img:"https://images.unsplash.com/photo-1704159528122-d2c326fe640d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"chandni"},
            {img:"https://images.unsplash.com/photo-1613909707776-098e961198dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"neha"},
            {img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"harsh"},
            {img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"harshu"},
            {img:"https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D", name:"chandan"},
            {img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"jack"},
            {img:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"josh"},
            {img:"https://images.unsplash.com/photo-1524538198441-241ff79d153b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"neeraj"},
            {img:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name:"chand"}
]

array.forEach(function(elem){
    group+=`
    <div class="person">
        <div class="img"> <img src="${elem.img}" alt=""></div>
        <h4>${elem.name}</h4>
    </div>`
})

// console.log(group);
profile.innerHTML= group


search.addEventListener("input",function(){
    
    var filt=array.filter(function(element){
        return element.name.startsWith(search.value)
    })
    let newGroup =" "
    filt.forEach(function(elem){
        newGroup+=`
        <div class="person">
            <div class="img"> <img src="${elem.img}" alt=""></div>
            <h4>${elem.name}</h4>
        </div>`
    })

    profile.innerHTML= ""
    profile.innerHTML= newGroup

    
})

profile.addEventListener("click",function(dets){
    if(dets.target.closest(".img")){
        foto.style.backgroundImage = `url(${dets.target.src})`
        foto.style.display="block"
    
    }
})

const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', () => {
  foto.style.display = "none"; 
  foto.style.backgroundImage = "none";
});
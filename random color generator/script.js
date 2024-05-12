hex='0123456789ABCDEF';
let randomColor = function(){
    color='#';
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    document.querySelector("body").style.backgroundColor=color
    // console.log(color)
    
}
let periodic ;
let flag =0;
document.querySelector('.start').addEventListener('click',function(){
    if(flag==0 && !periodic){
        periodic = setInterval(randomColor,1000)
        flag=1;
    }
    
})

document.querySelector('.stop').addEventListener('click',function(){
    if(flag==1){
        clearInterval(periodic)
        periodic=null
        flag=0
    }
})





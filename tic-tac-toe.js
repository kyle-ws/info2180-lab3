window.addEventListener('DOMContentLoaded', (event) => {
    
    
    let item=document.querySelectorAll("#board>div");
    let button= document.querySelector(".btn");
    let status= document.getElementById("status");
    let X=true;
    let O=false;
    
    

    item.forEach((k)=> {
        k.classList.add("square");
        k.innerHTML = " ";
    
    });

    item.forEach((k)=> {
        
        k.onclick = (event)=>{
            if (X && k.innerHTML == " "){
                k.classList.add("X");
                k.innerHTML = 'X';
                X= false;
                O = true;
            }
            else if (O && k.innerHTML == " "){
                k.classList.add("O");
                k.innerHTML = 'O';
                O = false;
                X = true;
            }
               
            if (
                item[0].innerHTML=="X" && item[1].innerHTML=="X" && item[2].innerHTML=="X" ||
                item[0].innerHTML=="X" && item[4].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[6].innerHTML=="X" && item[7].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[0].innerHTML=="X" && item[3].innerHTML=="X" && item[6].innerHTML=="X" ||
                item[1].innerHTML=="X" && item[4].innerHTML=="X" && item[7].innerHTML=="X" ||
                item[2].innerHTML=="X" && item[5].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[0].innerHTML=="X" && item[4].innerHTML=="X" && item[8].innerHTML=="X" ||
                item[2].innerHTML=="X" && item[4].innerHTML=="X" && item[6].innerHTML=="X"){
                status.innerHTML="Congratulations! X is the Winner!"
                status.classList.add("you-won");
            }
            else if(

                item[0].innerHTML=="O" && item[1].innerHTML=="O" && item[2].innerHTML=="O" ||
                item[0].innerHTML=="O" && item[4].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[6].innerHTML=="O" && item[7].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[0].innerHTML=="O" && item[3].innerHTML=="O" && item[6].innerHTML=="O"||
                item[1].innerHTML=="O" && item[4].innerHTML=="O" && item[7].innerHTML=="O"||
                item[2].innerHTML=="O" && item[5].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[0].innerHTML=="O" && item[4].innerHTML=="O" && item[8].innerHTML=="O" ||
                item[2].innerHTML=="O" && item[4].innerHTML=="O" && item[6].innerHTML=="O"){
                status.innerHTML="Congratulations! O is the Winner!"
                status.classList.add("you-won");
                
            }
            
        }
        k.addEventListener('mouseover', function handleMouseOver() {
            k.classList.add('hover')
        });
          
          
        k.addEventListener('mouseout', function handleMouseOut() {
            k.classList.remove('hover')
        });
        
        
        
    });


const restartGame = () => {
  location.reload();
}

button.addEventListener('click', restartGame)

    
});
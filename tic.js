let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgame=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".mycontainer");
let msg =document.querySelector("#msg");
 let turn0=true;
 let winningpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6], 
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];
 const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
 };
 boxes.forEach( (box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
        
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        
        box.style.pointerEvents = "none";
        checkwinner();    });

 });
 const disableboxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none"; // Disable further clicks
    });
};

// Enable all boxes for a new game
const enableboxes = () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear the board
        box.style.pointerEvents = "auto"; // Enable clicking
    });
};
 const showwinner = (winner)=>{
    msg.innerText=`congratulations winner is ${winner} `;
    msgcontainer.classList.remove("hide");
 disableboxes();
 }
  const checkwinner=() => {
    for(let pattern of winningpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner is ",pos1);
                showwinner(pos1);
             
            }
        }
        }
    
  }
  newgame.addEventListener("click",resetgame);
  resetbtn.addEventListener("click",resetgame);
 
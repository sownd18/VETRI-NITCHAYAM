const dice1=document.getElementById("dice1");
const dice2=document.getElementById("dice2");
const rollButton=document.getElementById("rollButton");
const result=document.getElementById("result");

rollButton.addEventListener("click", ()=> {
    const random1=Math.floor(Math.random()*6)+1;
    const random2=Math.floor(Math.random()*6)+1;

    dice1.src=`images/dice${random1}.png`;
    dice2.src=`images/dice${random2}.png`;


if(random1>random2){
    result.textContent="😎✨🎁Player 1 win!";
}else if(random1<random2){
    result.textContent="😎✨🎁Player 2 win!";
}else{
    result.textContent="Draw the Match!😅";
}
});

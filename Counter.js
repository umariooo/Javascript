const DecreaseButton = document.getElementById("myDecrease");
const ResetButton = document.getElementById("myReset");
const IncreaseButton = document.getElementById("myIncrease");
const CountLabel = document.getElementById("countLabel");

let count = 0;

IncreaseButton.onclick = function(){

    count++;
    CountLabel.textContent = count;
}

ResetButton.onclick = function(){
    count =0;
    CountLabel.textContent = count;
}

DecreaseButton.onclick = function(){

    count--;
    CountLabel.textContent = count;
}

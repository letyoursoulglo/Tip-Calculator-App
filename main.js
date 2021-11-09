let billInput = document.getElementById("bill");
let customInput = document.getElementById("custom-amount");
let peopleNumInput = document.getElementById("people-number");
let tipAmountNum = document.querySelector(".tip-number");
let perPersonNum = document.querySelector(".people-amount");

document.querySelector('.btn-1').addEventListener("click", clickBtn);
document.querySelector('.btn-2').addEventListener("click", clickBtn);
document.querySelector('.btn-3').addEventListener("click", clickBtn);
document.querySelector('.btn-4').addEventListener("click", clickBtn);
document.querySelector('.btn-5').addEventListener("click", clickBtn);


document.getElementById("custom-amount").addEventListener('input', function(){
  Calculate(Number(customInput.value) / 100);
});

function clickBtn() {
  var tipPercentage = this.textContent;
  if (tipPercentage == "5%") {
    Calculate(0.05);
  }
  else if (tipPercentage == "10%") {
    Calculate(0.10);
  }
  else if (tipPercentage == "15%"){
    Calculate(0.15);
  }
  else if (tipPercentage == "25%"){
    Calculate(0.25);
  }
  else if (tipPercentage == "50%"){
    Calculate(0.50);
  }
}

function Calculate(tipTotal) {
  if (peopleNumInput.value >= 1) {
    let tipAmountPerPerson = (Number(billInput.value) * Number(tipTotal)) / Number(peopleNumInput.value);
    let totalAmountPerPerson = (Number(billInput.value) / Number(peopleNumInput.value)) + tipAmountPerPerson;

    document.querySelector(".tip-number").innerHTML = "$" + (Math.round(tipAmountPerPerson * 100) / 100);
    document.querySelector(".people-amount").innerHTML = "$" + (Math.round(totalAmountPerPerson * 100) / 100);
  }
}

document.getElementById("reset-btn").addEventListener("click", function(){
  billInput.value = "0";
  peopleNumInput.value = "0";
  customInput.value = "";
  tipAmountNum.textContent = "$0.00";
  perPersonNum.textContent = "$0.00";
});

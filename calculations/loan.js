function loanCalc(owed, rate, months){
    // let result = (owed + (owed * (rate / 100) * (months / 12))) / months;
    let result = (Number(owed)+(owed*(rate/100)))/months
    return result ? result.toFixed(2) : "???"
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const owed = urlParams.get("loan-amount");
const rate = urlParams.get("interest-rate");
const months = urlParams.get("num-months");

document.getElementById("loan-amount").value = owed;
document.getElementById("interest-rate").value = rate;
document.getElementById("num-months").value = months;
document.getElementById("result").innerHTML = loanCalc(owed, rate, months);
function mortgageCalc(amount, term, rate){
    let result = ((((amount * (rate / 100)) / term) + (amount / term)) * 100);
    return result ? result.toFixed(2) : "???";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const amount = urlParams.get("mortgageAmount");
const term = urlParams.get("lo");
const rate = urlParams.get("ir");
document.getElementById("amount").value = amount;
document.getElementById("lo").value = term;
document.getElementById("ir").value = rate;
document.getElementById("result").innerHTML = mortgageCalc(amount, term, rate);
function taxCalc(income, mult){
    let rate;
    switch(true){
        case (income > 243725 * mult):
            rate = 35;
            break;
        case (income > 191950 * mult):
            rate = 32;
            break;
        case (income > 100525 * mult):
            rate = 24;
            break;
        case (income > 47150 * mult):
            rate = 22;
            break;
        case (income > 11600 * mult):
            rate = 12;
            break;
        default:
            rate = 0;
            break;
    }
    let result = income * rate / 100;
    return result ? result.toFixed(2) : "???";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const income = urlParams.get("income");
const mult = urlParams.get("filing-status");

document.getElementById("status").value = mult;
document.getElementById("income").value = income;
document.getElementById("result").innerHTML = taxCalc(income, mult);

//Tax percentages
/*35% for incomes over $243,725 ($487,450 for married couples filing jointly)
32% for incomes over $191,950 ($383,900 for married couples filing jointly)
24% for incomes over $100,525 ($201,050 for married couples filing jointly)
22% for incomes over $47,150 ($94,300 for married couples filing jointly)
12% for incomes over $11,600 ($23,200 for married couples filing jointly)
*/
function taxCalc(income, mult, state){
    let rate;
    let state_tax = {
        'AK': 0.00,
        'FL' : 0.00,
        'NV' : 0.00,
        'NH': 0.00,
        'SD' : 0.00,
        'TN' : 0.00,
        'TX' : 0.00,
        'WA' : 0.00,
        'WY': 0.00,
        'ND' : 0.0112,
        'OH' : 0.0184,
        'AZ' : 0.0244,
        'RI' : 0.0302,
        'PA' : 0.0307,
        'LA' : 0.0315,
        'IN' : 0.0318,
        'NJ' : 0.0322,
        'NM' : 0.0359,
        'CT' : 0.0368,
        'VT' : 0.0369,
        'CO' : 0.0371,
        'WI' : 0.0392,
        'MI' : 0.0395,
        'MS' : 0.0398,
        'OK' : 0.0398,
        'NC' : 0.0408,
        'MO': 0.0413,
        'MD': 0.0430,
        'CA' : 0.0436,
        'ID' : 0.0457,
        'KS': 0.0458,
        'AL' : 0.0466,
        'MA' : 0.0469,
        'WV' : 0.0471,
        'WA' : 0.0473,
        'KY' : 0.0475,
        'ME' : 0.0476,
        'NE' : 0.0476,
        'IL' : 0.0478,
        'DE' : 0.0483,
        'UT' : 0.0490,
        'GA' : 0.0490,
        'SC' : 0.0493,
        'VA' : 0.0494,
        'AR' : 0.0502,
        'MT' : 0.0522,
        'IA' : 0.0543,
        'HI' : 0.0679,
        'OR' : 0.0805
    }

    let state_cut = income * state_tax[state];
    console.log(state_cut);
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
    let base = income * rate / 100;
    result = base + state_cut;
    return result ? result.toFixed(2) : "???";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const income = urlParams.get("income");
const mult = urlParams.get("filing-status");
const state_rate = urlParams.get("states");
document.getElementById("status").value = mult;
document.getElementById("income").value = income;
document.getElementById("states").value = state_rate;
document.getElementById("result").innerHTML = taxCalc(income, mult, state_rate);

//Tax percentages
/*35% for incomes over $243,725 ($487,450 for married couples filing jointly)
32% for incomes over $191,950 ($383,900 for married couples filing jointly)
24% for incomes over $100,525 ($201,050 for married couples filing jointly)
22% for incomes over $47,150 ($94,300 for married couples filing jointly)
12% for incomes over $11,600 ($23,200 for married couples filing jointly)
*/
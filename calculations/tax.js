var annualIncome;
//Single or Married(filing jointly) dropdown
var filingStatus;

//to calculate have function that takes income and status
// set taxAmount = 0.0
//First use the single status numbers
//use if statements to go through each level
/*
if income > $243,725
    taxAmount = taxAmount + (income-243725)*.35
    income = 243725
if income > 191,950
    tax = tax + (income - 191,950)*.24
...(continue using numbers at bottom of pages for single)
(if the amount of income is < 11,600, taxAmount should return 0 )
*/
//make an if statement for if single and if married
//copy and paste single to married and just change the money numbers
//return taxAmount

taxCalc(income,stats)
{
    taxAmount = 0
    return taxAmount;
}



//Tax percentages
/*35% for incomes over $243,725 ($487,450 for married couples filing jointly)
32% for incomes over $191,950 ($383,900 for married couples filing jointly)
24% for incomes over $100,525 ($201,050 for married couples filing jointly)
22% for incomes over $47,150 ($94,300 for married couples filing jointly)
12% for incomes over $11,600 ($23,200 for married couples filing jointly)
*/
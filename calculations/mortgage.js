var mortgageAmount;
//15, 20, or 30
var loanTerm;
var interestRate;

//hopefully this basic code makes sense, its just a simple calculation
//output the function output next to calculations in mortgage

mortgageCalc(amount,term,rate)
{
return ((amount*(rate/100))/term)+(amount/term);
}

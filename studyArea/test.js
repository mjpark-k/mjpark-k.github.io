function interestCalculator(myMoney, saveTerm, interestRate) {
  return myMoney * saveTerm * interestRate / 100;
}

let myMoney = 3650000;
let saveTerm = 1;
let interestRate = 4;

let myInterestCalculator = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterestCalculator;

console.log(`맡긴 금액은 ${myMoney}원 입니다.`);
console.log(`이자는 ${myInterestCalculator}원 입니다.`);
console.log(`최종 받을 금액은 ${totalMoney}원 입니다.`)
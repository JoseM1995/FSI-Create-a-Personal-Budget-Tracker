let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here


window.prompt(weeklyExpenseQuestions[0])

let questionArray = [
    weeklyExpensesQuestions, 
    monthlyExpensesQuestions, 
    annualExpensesQuestions
];


for (let q = 0; q < questionArray.length; q++) {
  
    let questions = questionArray[q];
  
    for (let i = 0; i < questions.length; i++) {
   let answer = Number(window.prompt(questions[i]));
   if (q === 0) {
       weeklyExpenses = weeklyExpenses + answer;
   } else if (q === 1) {
       monthlyExpenses = monthlyExpenses + answer;
   } else if (q ===  2) {
       annualExpenses = annualExpenses + answer;
   }
  } 
}

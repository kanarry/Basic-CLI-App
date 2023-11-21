var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName + '! to a basic quiz');

let score = 0
function play(question, answer) {
    let userAnswer = readlineSync.question(question)
    userAnswer = userAnswer.toLowerCase()
    if(userAnswer == answer){
        console.log("you are right");
        score += 1
    } else {
        console.log("you are wrong");
    }
}

function Question(question, answer){
    this.question = question
    this.answer = answer
}

let q1 = new Question("what is the color of the sky ", "blue")
let q2 = new Question("what is the color of the sun ", "white")
let q3 = new Question("what is the color of darkness ", "black")
let q4 = new Question("what is the color of the grass ", "green")
let q5 = new Question("what is the color of the water ", "blue")

let ques = [q1, q2 , q3, q4 ,q5]


for (let i = 0; i < ques.length; i++){
    play(ques[i].question, ques[i].answer)
}
console.log("Final Score is " + score);
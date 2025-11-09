const answersArray = [];
const NumofNum = document.querySelector(".quiz-answer")
let Answer1 = 0;

const Firstquestion = prompt("100/5");
const Secendquestion = prompt("200 * 2");
const thirdquestion = prompt("250 * 2");

function checkResult (UserAnswer, CorrectAnswer) {
    if (Number(UserAnswer) === CorrectAnswer) {
        
        answersArray.push(true);
        Answer1++;
    }

    else {
        
        answersArray.push(false);
    } 

} 

checkResult(Firstquestion, 20)
checkResult(Secendquestion, 400)
checkResult(thirdquestion, 500)




const CircleColor1 = document.querySelector(".span1")
const CircleColor2 = document.querySelector(".span2")
const CircleColor3 = document.querySelector(".span3")

function updateColors() {
  const circles = [CircleColor1, CircleColor2, CircleColor3];

  for (let i = 0; i < circles.length; i++) {
    if (answersArray[i] === true) {
      circles[i].style.color = "#19d33f";
    } else {
      circles[i].style.color = "#d01323";
    }
  }
}

updateColors();
NumofNum.innerHTML = `${Answer1} / 3`;





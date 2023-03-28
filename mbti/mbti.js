import {qnaList, infoList} from "./question.js";

const startBtn = document.querySelector("#startBtn");
const qPage = document.querySelector(".qPage");
const aPage = document.querySelector(".aPage")
const startPage = document.querySelector(".startPage")
const endpoint = 12;
const select = [];

startBtn.addEventListener("click", (e) => {
  e.preventDefault();

  qPage.classList.add("open")
  startPage.classList.add("close");

  let qIdx = -1;

  goNext(qIdx);

});

function addAnswer(answerText, qIdx, idx) {
  const answer = document.createElement("button");
  qPage.appendChild(answer);
  answer.classList.add("answerBtn")
  answer.innerHTML = answerText;

  answer.addEventListener("click", (e) => {
    e.preventDefault();

    let children = document.querySelectorAll(".answerBtn");
    select[qIdx] = idx;
    for (let i=0; i<children.length; i++) {
      children[i].disabled = true;
      children[i].style.display = "none";
    }
    goNext(qIdx++);
  })

}

function goResult() {
  qPage.classList.remove("open");
  aPage.classList.add("open");

  const mType = document.querySelector(".aPage > h1");
  const mDesc = document.querySelector(".aPage > h2");

  calResult();

  mType.innerHTML = calResult();
  for (let i=0; i<infoList.length; i++) {
    if (infoList[i].name === calResult()) {
      mDesc.innerHTML = infoList[i].desc
    }
  }
}


function calResult() {
  let pointArray = [
    {name: "ESTP", value: 0, key: 0},
    {name: "ESFP", value: 0, key: 1},
    {name: "ENTP", value: 0, key: 2},
    {name: "ENFP", value: 0, key: 3},
    {name: "ESTJ", value: 0, key: 4},
    {name: "ESFJ", value: 0, key: 5},
    {name: "ENTJ", value: 0, key: 6},
    {name: "ENFJ", value: 0, key: 7},
    {name: "ISTP", value: 0, key: 8},
    {name: "ISFP", value: 0, key: 9},
    {name: "INTP", value: 0, key: 10},
    {name: "INFP", value: 0, key: 11},
    {name: "ISTJ", value: 0, key: 12},
    {name: "ISFJ", value: 0, key: 13},
    {name: "INTJ", value: 0, key: 14},
    {name: "INFJ", value: 0, key: 15},
  ]

  for (let i=0; i<endpoint; i++) {
    let target = qnaList[i].a[select[i]];
    for (let j=0; j<target.type.length; j++) {
      for (let k=0; k<pointArray.length; k++) {
        if (target.type[j] === pointArray[k].name) pointArray[k].value += 1;
      }
    }
  }

  let resultArray = pointArray.sort((a, b) => b.value - a.value);

  console.log(resultArray[0]);

  let resultName = resultArray[0].name

  return resultName;
}

function goNext(qIdx) {
  if (++qIdx === endpoint) {
    goResult();
    return;
  }

  const qBox = document.querySelector("#qBox");
  qBox.innerHTML = qnaList[qIdx].q; 
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
}

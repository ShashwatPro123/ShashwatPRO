const screen = document.querySelector(".screen");
const numsBtn = document.querySelectorAll(".num-btn");
const operBtn = document.querySelectorAll(".op-btn");
const eqlBtn = document.querySelector(".eql");
const clrBtn = document.querySelector(".clr");

for (let i = 0; i < numsBtn.length; i++) {
  numsBtn[i].addEventListener("click", () => {
    let number = numsBtn[i].getAttribute("data-num");
    screen.value += number;
  });
}
for (let i = 0; i < operBtn.length; i++) {
  operBtn[i].addEventListener("click", () => {
    let opr = operBtn[i].getAttribute("data-num");
    screen.value += opr;
  });
}
eqlBtn.addEventListener("click", () => {
  if (screen.value === "") {
    alert("This Field Can't Be Empty");
  } else {
    let value = eval(screen.value);
    screen.value = "";
    screen.value += value;
  }
});

clrBtn.addEventListener("click", () => {
  screen.value = "";
});

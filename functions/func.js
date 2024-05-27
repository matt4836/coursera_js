const calculateArea = (a, b) => a * b;
const add = (a, b) => a + b;

function updateText(label, answer) {
  if (answer) {
    document.getElementById(label).innerText = `${answer}`;
  } else {
    document.getElementById(label).innerText = `Missing values`;
  }
}

function addItems() {
  let item1 = parseFloat(document.getElementById("item1").value);
  let item2 = parseFloat(document.getElementById("item2").value);
  let answer = add(item1, item2);
  updateText("addItemResult", answer);
}

function updateResult() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let answer = calculateArea(length, width);
  updateText("result", answer);
}

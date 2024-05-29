const clickMeButton = document.getElementById("clickMe");
clickMeButton.addEventListener("click", handleClickMeButton);

function MakeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = MakeCounter();

function handleClickMeButton() {
  let clickMeDiv = document.getElementById("clickMeDiv");
  let count = counter();
  clickMeDiv.innerText = `The button was clicked ${count} time${
    count == 1 ? "" : "s"
  }`;
}

document
  .getElementById("clickMeDiv")
  .addEventListener("mousemove", function (event) {
    document.getElementById("clickMeDiv").innerText = `${event.movementX}`;
  });

document
  .getElementById("inputField")
  .addEventListener("blur", function (event) {
    document.getElementById("inputFieldDiv").innerText = "blurry";
    document.getElementById("inputField").classList.add("blurred");
  });

document
  .getElementById("inputField")
  .addEventListener("focus", function (event) {
    document.getElementById("inputFieldDiv").innerText = "focused";
    document.getElementById("inputField").classList.remove("blurred");
  });

document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("inputFieldDiv").innerText = `${event.timeStamp}`;
  });

document
  .getElementById("scrollDiv")
  .addEventListener("scroll", function (event) {
    const scrollDivInner = document.getElementById("scrollDivInner");
    const currentColor =
      window.getComputedStyle(scrollDivInner).backgroundColor;
    const rgb = currentColor.match(/\d+/g).map(Number);
    let [r, g, b] = rgb;
    const target = event.target;
    const scrollValue = target.scrollTop;
	r = Math.max(0, Math.min(255, 300 - scrollValue));
    g = Math.max(0, Math.min(255, 600 - scrollValue));
	b = Math.max(0, Math.min(255, 1000 - scrollValue));
    // Update the background color
    scrollDivInner.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    console.log(r,g,b);
  });

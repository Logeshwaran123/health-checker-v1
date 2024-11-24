"use strict";

// DOM ELEMENTS
const comment = document.querySelector(".comment");
const bmiValue = document.querySelector(".bmiValue");
const bmrValue = document.querySelector(".bmrValue");
const calcBtn = document.getElementById("calculate");

// Methods
function performCalc() {
  // INPUT ELEMENTS
  let age = document.getElementById("age").value * 1;
  let gender = document.getElementById("gender").value[0];
  let wght = document.getElementById("wght").value * 1;
  let hght = document.getElementById("hght").value * 1;
  let activity = document.getElementById("activity").value;

  if (gender && wght && hght && age && activity) {
    // BMI CALCULATION
    let bmi = wght / hght ** 2;
    bmiValue.innerHTML = `Your BMI value is ${Math.trunc(bmi)}`;
    // BMR CALCULATION
    let bmrMa = 0;
    let bmrWm = 0;
    if (gender == "M") {
      let bmrMa = 88.362 + 13.397 * wght + 4.799 * hght - 5.677 * age;
      bmrValue.innerHTML = `Your BMR value is ${Math.trunc(bmrMa)}`;
      if (activity == "A") {
        comment.innerHTML = `You can take ${Math.trunc(bmrMa * 1.2)}/per day.`;
      } else if (activity == "PA") {
        comment.innerHTML = `You can take ${Math.trunc(bmrMa * 1.7)}/per day.`;
      } else if (activity == "VA") {
        comment.innerHTML = `You can take ${Math.trunc(bmrMa * 1.9)}/per day.`;
      }
    } else if (gender == "F") {
      let bmrWm = 447.593 + 9.247 * wght + 3.098 * hght - 4.33 * age;
      bmrValue.innerHTML = `Your BMR value is ${Math.trunc(bmrWm)}`;
      if (activity == "A") {
        comment.innerHTML = `You can take ${Math.trunc(bmrWm * 1.2)}/per day.`;
      } else if (activity == "PA") {
        comment.innerHTML = `You can take ${Math.trunc(bmrWm * 1.7)}/per day.`;
      } else if (activity == "VA") {
        comment.innerHTML = `You can take ${Math.trunc(bmrWm * 1.9)}/per day.`;
      }
    } else {
      alert("Invalid Input for the Gender");
    }
  } else {
    alert("Enter the required data");
  }
}
window.addEventListener("keydown", (evt) => {
  if (evt.key == "Enter") {
    performCalc();
  }
});
calcBtn.addEventListener("click", performCalc);

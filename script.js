const btn = document.querySelector("button");
const infoInput = document.querySelector(".info");
const weightCondition = document.querySelector(".weight-condition");
const imgContainer = document.querySelector(".image-container");

const checkBodyMassIndex = () => {
  const heightEL = document.querySelector(".height").value / 100;
  const weightEL = document.querySelector(".weight").value;

  const bmiValue = (weightEL / (heightEL * heightEL)).toFixed(1);
  infoInput.value = bmiValue + " kg/m2";

  imgContainer.innerHTML = "";

  if (bmiValue < 18.5) {
    weightCondition.innerHTML = "Underweight";
    const img = document.createElement("img");
    img.src = "img/anorexia.png";
    img.alt = "underweight";
    imgContainer.appendChild(img);
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerHTML = "Normal weight";
    const img = document.createElement("img");
    img.src = "img/icons8-sportsman-66.png";
    img.alt = "normal weight";
    imgContainer.appendChild(img);
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.innerHTML = "Overweight";
    const img = document.createElement("img");
    img.src = "img/icons8-overweight-50.png";
    img.alt = "overweight";
    imgContainer.appendChild(img);
  } else if (bmiValue >= 30) {
    weightCondition.innerHTML = "Obesity";
    const img = document.createElement("img");
    img.src = "img/icons8-obesity-64.png";
    img.alt = "obesity";
    imgContainer.appendChild(img);
  }
};

btn.addEventListener("click", checkBodyMassIndex);

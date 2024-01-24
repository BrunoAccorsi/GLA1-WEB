let h1 = document.createElement("H1");
h1.textContent = "Bruno Accorsi Bergoli";
h1.style = "text-align: center; color: #A9A9A9;";
document.body.appendChild(h1);
document.body.style = "background-color: aliceblue;";

let input1 = document.createElement("input");
input1.style =
  "border-radius: 0.5rem; height: 30px; border: 1px solid cornflowerblue; outline: none;";
let input2 = document.createElement("input");
input2.style =
  "border-radius: 0.5rem; height: 30px; border: 1px solid cornflowerblue; outline: none;";
let button = document.createElement("Button");
button.style =
  "border-radius: 0.5rem; height: 30px; border: none; outline: none; background-color: lightskyblue; color: white";
button.innerText = "Sum";

let div = document.createElement("div");
div.style =
  "display: flex; flex-direction: column; padding: 5rem 40vw; gap: 1rem";
div.appendChild(input1);
div.appendChild(input2);
div.appendChild(button);
document.body.appendChild(div);

const sum = () => {
  document.getElementById("sum")?.remove();
  let sum = parseFloat(input1.value) + parseFloat(input2.value);
  let p = document.createElement("p");
  p.id = "sum";
  p.innerText = "The sum is: " + sum;

  div.appendChild(p);
};

const isNumber = (value) => {
  if (isNaN(parseFloat(value))) {
    return false;
  }
  return true;
};

const validade = () => {
  try {
    [input1, input2].forEach((input) => {
      input.style.borderColor = "";
    });
    document.getElementById("validation-error")?.remove();

    [input1, input2].forEach((input) => {
      if (!isNumber(input.value)) {
        input.style.borderColor = "red";
        throw new Error("Inputs must be of type number.");
      }
    });
    sum();
  } catch (error) {
    let errorMessage = document.createElement("p");
    errorMessage.id = "validation-error";
    errorMessage.textContent = error.message;
    errorMessage.style.color = "red";
    div.appendChild(errorMessage);
  }
};

button.addEventListener("click", validade);

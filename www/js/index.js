document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}

let FullEquation = document.getElementById("topNumber");
const op = document.getElementsByClassName("op");
const button = document.getElementsByTagName("button");
const equals = document.getElementById("equals");
const screenResult = document.getElementById("screen");
const removeBtn = document.getElementById("remove");
const removeAllBtn = document.getElementById("remove-all");
let OPERATIONS = getOperations(op);
let isClickedEqual = false; ///////

let numberBtns = document.getElementsByClassName("numbers");

/// Handler Inputting Numbers
for (let index = 0; index < numberBtns.length; index++) {
  const element = numberBtns[index];
  element.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    appendToFullEquation(e.target.innerHTML);
  });
}

/// Handler Inputting Operations
for (let index = 0; index < op.length; index++) {
  const element = op[index];
  element.addEventListener("click", (e) => {
    const newInput = e.target.dataset.op;
    if (
      // Check if last element of FullEquation string is an operation sign
      OPERATIONS.includes(getLastElementOfEquation())
    ) {
      FullEquation.innerHTML =
        FullEquation.innerHTML.substring(0, FullEquation.innerHTML.length - 1) +
        newInput;
    } else {
      appendToFullEquation(newInput);
    }
  });
}

removeAllBtn.addEventListener("click", () => {
  FullEquation.innerHTML = "";
  screenResult.innerHTML = "0";
});

removeBtn.addEventListener("click", () => {
  if (FullEquation.innerHTML.length) {
    FullEquation.innerHTML = FullEquation.innerHTML.substring(
      FullEquation.innerHTML.length - 1,
      0
    );
  }
});

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function () {
//     // alert(button[i].innerText);
//     topNum.innerHTML += button[i].innerText;
//   });
// }

equals.addEventListener("click", () => {
  try {
    screenResult.innerHTML = eval(FullEquation.innerHTML);
    isClickedEqual = true; ///
  } catch (error) {
    alert("Your Calculation seems wrong");
    screenResult.innerHTML = "invalid";
  }
});

/************************************************************** */
/************************** -- Handlers -- ******************** */
/************************************************************** */
function getOperations(operations) {
  let operationArr = [];
  for (let i = 0; i < operations.length; i++) {
    operationArr.push(operations[i].dataset?.op);
  }
  return [...operationArr];
}

function appendToFullEquation(text) {
  if (isClickedEqual) {
    /////
    FullEquation.innerHTML = "";
    isClickedEqual = false;
  }
  FullEquation.innerHTML += text;
}

function getLastElementOfEquation() {
  return FullEquation.innerHTML[FullEquation.innerHTML.length - 1];
}

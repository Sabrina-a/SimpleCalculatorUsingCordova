document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}

const button = document.getElementsByTagName("button");
const equals = document.getElementById("equals");
let topNum = document.getElementById("topNumber");
let op = document.getElementsByClassName("op");
// console.log(op);
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    // alert(button[i].innerText);
    topNum.innerHTML += button[i].innerText;
  });
}

equals.addEventListener("click", function () {
  //   alert();
  if (topNum == "") {
    return;
  }
  for (let i = 0; i < op.length; i++) {
    console.log(op[i].innerHTML);
    if (topNum.lastIndexOf(op[i].innerHTML) !== -1) {
      let operation = op[i].innerHTML;
      topNum = topNum.innerText.split(`${operation}`);

      switch (operation) {
        case "+":
        case "-":
        case "*":
        case "%":
        case "/":
      }
    }
  }
  console.log(topNum);
});

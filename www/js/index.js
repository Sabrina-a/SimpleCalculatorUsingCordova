document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!
  //camera
  document
    .getElementById("cameraTakePicture")
    .addEventListener("click", cameraTakePicture);
  //battery
  window.addEventListener("batterystatus", onBatteryStatus, false);
  //geolocation
  document.getElementById("getPosition").addEventListener("click", getPosition);
  document
    .getElementById("watchPosition")
    .addEventListener("click", watchPosition);
  //camera
  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    console.log(navigator.camera);
  }
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}

function onBatteryStatus(info) {
  alert(
    "BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged
  );
}

//get current location
function getPosition() {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 3600000,
  };
  var watchID = navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError,
    options
  );

  function onSuccess(position) {
    alert(
      "Latitude: " +
        position.coords.latitude +
        "\n" +
        "Longitude: " +
        position.coords.longitude +
        "\n" +
        "Altitude: " +
        position.coords.altitude +
        "\n" +
        "Accuracy: " +
        position.coords.accuracy +
        "\n" +
        "Altitude Accuracy: " +
        position.coords.altitudeAccuracy +
        "\n" +
        "Heading: " +
        position.coords.heading +
        "\n" +
        "Speed: " +
        position.coords.speed +
        "\n" +
        "Timestamp: " +
        position.timestamp +
        "\n"
    );
  }

  function onError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }
}

function watchPosition() {
  var options = {
    maximumAge: 3600000,
    timeout: 3000,
    enableHighAccuracy: true,
  };
  var watchID = navigator.geolocation.watchPosition(
    onSuccess,
    onError,
    options
  );

  function onSuccess(position) {
    alert(
      "Latitude: " +
        position.coords.latitude +
        "\n" +
        "Longitude: " +
        position.coords.longitude +
        "\n" +
        "Altitude: " +
        position.coords.altitude +
        "\n" +
        "Accuracy: " +
        position.coords.accuracy +
        "\n" +
        "Altitude Accuracy: " +
        position.coords.altitudeAccuracy +
        "\n" +
        "Heading: " +
        position.coords.heading +
        "\n" +
        "Speed: " +
        position.coords.speed +
        "\n" +
        "Timestamp: " +
        position.timestamp +
        "\n"
    );
  }

  function onError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }
}
//camera
function cameraTakePicture() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
  });

  function onSuccess(imageData) {
    var image = document.getElementById("myImage");
    image.src = "data:image/jpeg;base64," + imageData;
  }

  function onFail(message) {
    alert("Failed because: " + message);
  }
}

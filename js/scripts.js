function scan() {
  navigator.bluetooth.requestDevice({ acceptAllDevices: true });
  alert("Clicked");
}

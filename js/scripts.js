function scan() {
  navigator.bluetooth.startDiscovery(result => {
    console.log(result);
  });
}

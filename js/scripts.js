function scan() {
  navigtor.bluetooth.startDiscovery(result => console.log(result));
}

function scan() {
  bluetooth.startDiscovery(result => console.log(result));
}

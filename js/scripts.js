function scan() {
  chrome.bluetooth.startDiscovery(result => console.log(result));
}

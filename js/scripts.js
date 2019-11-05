function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [
        { acceptAllDevices: True, optionalServices: "device_information" }
      ]
    })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

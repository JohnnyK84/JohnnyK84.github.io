function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [{ acceptAllDevices: true }, { namePrefix: "" }]
    })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

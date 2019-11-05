function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ acceptAllDevices: true }] })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

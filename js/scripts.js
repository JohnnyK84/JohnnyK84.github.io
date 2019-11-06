function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [
        {
          acceptAllDevices: true,
          name: "GGL HR5"
        }
      ]
    })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

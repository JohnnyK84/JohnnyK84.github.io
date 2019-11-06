function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [
        {
          acceptAllDevices: true,
          services: [
            "66021000-43af-49c1-a7bc-cef71abd0ad9",
            "46021000-43af-49c1-a7bc-cef71abd0ad9"
          ]
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

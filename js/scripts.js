function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [
        {
          acceptAllDevices: true,
          name: "SNPSHOT Sampler",
          services: ["66021000-43af-49c1-A7bc-cef71abd0ad9"]
        }
      ]
    })
    .then(result => {
      alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

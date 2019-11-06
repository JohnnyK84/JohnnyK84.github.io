function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [
        {
          acceptAllDevices: true,
          name: "SNPSHOT Sampler",
          services: ["0x100"]
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

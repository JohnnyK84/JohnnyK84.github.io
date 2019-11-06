function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [
        {
          acceptAllDevices: true,
          name: "SNPSHOT Sampler"
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

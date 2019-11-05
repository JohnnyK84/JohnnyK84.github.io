function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ namePrefix: "GGL HR5" }] })
    .then(result => {
      alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

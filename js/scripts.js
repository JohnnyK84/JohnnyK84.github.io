function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ namePrefix: "G" }] })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

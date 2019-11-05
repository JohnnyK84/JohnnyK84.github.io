function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ namePrefix: "RS420_" }] })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

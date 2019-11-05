function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ name: "RS420_03866" }] })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

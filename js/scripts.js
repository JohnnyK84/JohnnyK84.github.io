function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ namePrefix: "GGL" }] })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

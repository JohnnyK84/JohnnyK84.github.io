function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ namePrefix: "Allfelx" }] })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

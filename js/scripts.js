function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ namePrefix: "Allflex" }] })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

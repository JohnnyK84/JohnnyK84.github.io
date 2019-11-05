function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [{ namePrefix: "R" }]
    })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

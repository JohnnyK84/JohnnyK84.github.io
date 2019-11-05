function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [{ namePrefix: " " }]
    })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

function scan() {
  navigator.bluetooth
    .requestDevice({
      filters: [{ name: "hi" }]
    })
    .then(result => {
      //alert(result);
    })
    .catch(err => {
      alert(err);
    });
}

function scan() {
  navigator.bluetooth
    .requestDevice({ acceptAllDevices: true })
    .then(result => {
      alert(result);
    })
    .catch(err => {
      alert(err);
    });
  alert("Clicked");
}

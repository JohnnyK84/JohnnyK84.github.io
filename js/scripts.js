function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ namePrefix: "RS" }] })
    .then(result => {
      alert(result);
    })
    .catch(err => {
      alert(err);
    });
  alert("Clicked");
}

function scan() {
  navigator.bluetooth
    .requestDevice({ filers: [{ name: "RS420_03866" }] })
    .then(result => {
      alert(result);
    })
    .catch(err => {
      alert(err);
    });
  alert("Clicked");
}

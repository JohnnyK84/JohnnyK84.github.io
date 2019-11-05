function scan() {
  navigator.bluetooth
    .requestDevice({ filters: [{ name: "Allflex RS420" }] })
    .then(result => {
      alert(result);
    })
    .catch(err => {
      alert(err);
    });
  alert("Clicked");
}

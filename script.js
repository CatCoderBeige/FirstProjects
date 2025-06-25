function uncensor() {
  const el = document.querySelector("div.Bilderraster");

  el.innerHTML += `
    <div class="Bilderraster">
      <img src="">
      <img src="">
      <img src="">
      <img src="">
      <img src="">
      <img src="">
      <a class="next" href="text.html">WILLST DU MEHR?</a>
    </div>
  `;
}

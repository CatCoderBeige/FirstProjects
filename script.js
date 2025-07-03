function uncensor() {
  const el = document.querySelector("div.Bilderraster");

  if (el) { // Überprüfe, ob das Element existiert
    el.innerHTML = `
      <img class="Collage" src="1.jpeg">
      <img class="Collage" src="2.jpeg">
      <img class="Collage" src="3.jpeg">
      <img class="Collage" src="4.jpeg">
      <img class="Collage" src="5.jpeg">
      <img class="Collage" src="6.jpeg">
      <a class="next" href="text.html">WILLST DU MEHR?</a>
    `;
  } else {
    console.log("Element mit der Klasse 'Bilderraster' nicht gefunden."); // Füge eine Fehlermeldung hinzu, um zu debuggen
  }
}


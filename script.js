function uncensor() {
  const el = document.querySelector("div.Bilderraster");

  if (el) { // Überprüfe, ob das Element existiert
    el.innerHTML = `
      <img class="Collage" src="IMG_0481.png">
      <img class="Collage" src="IMG_0482.png">
      <img class="Collage" src="IMG_0484.png">
      <img class="Collage" src="0C597558-7435-4FCF-BF13-187183C915FE.jpeg">
      <img class="Collage" src="40D5A531-8C99-470C-BEDC-83E13CF6A68E.jpeg">
      <img class="Collage" src="C55E4DE5-93C2-40AE-8A17-C83BA86A2143.jpeg">
      <a class="next" href="text.html">WILLST DU MEHR?</a>
    `;
  } else {
    console.log("Element mit der Klasse 'Bilderraster' nicht gefunden."); // Füge eine Fehlermeldung hinzu, um zu debuggen
  }
}


/*
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
} */

// let Zähler = document.querySelector("input[type='range']").value;

function alleBilder() {
  const anzahl = parseInt(document.querySelector("#myRange").value);
  const el = document.querySelector("div.Bilderraster");

  if (!el) {
    console.log("Element mit der Klasse 'Bilderraster' nicht gefunden.");
    return;
  }

  el.innerHTML = ""; // Vorherige Bilder entfernen

  for (let i = 1; i <= anzahl; i++) {
    el.innerHTML += `<img class="Collage" src="${i}.jpeg">`;
  }
}

function geschenkPapier() {
  const container = document.getElementById("geschenkContainer");
  if (container) {
    container.className = "verpacktesGeschenk";
    container.innerHTML = `
      <div class="letter-wrapper">
        <h1>Für Charlotte 💖</h1>
        <div class="love-letter">
            <p>Hi Baby, ich habe dir diesen Liebesbrief geschrieben, aber die Idee kam nicht von dir, falls du dich noch daran erinnerst. Ich hatte die Idee schon vorher und bin darauf gekommen, weil ich dir zeigen will, wie sehr ich dich liebe und wie viel du mir bedeutest.
Ich liebe dich von ganzem Herzen, weil ich dir von Anfang an Seiten zeigen konnte, die ich sonst selten und nur bei ein paar Menschen zeige, die ich schon lange kenne. Ich habe mich sofort warm bei dir gefühlt und wollte dich direkt beeindrucken. Ich wollte lustig sein, damit du auch auf mich stehst. Ich habe so gehofft, als ich dich eine alte Katzenomi genannt habe, dass du lachst und mich besonders findest. Ich wollte dich die ganze Zeit mit allen komischen und verwirrenden Sachen dazu bringen, dass du dich verliebst. In mich!
Ich bin so unendlich glücklich, dass wir zusammen sind. Du machst mich jeden Tag so glücklich! Du machst mich glücklich, ganz im Stillen, wenn du nicht mal etwas machst; wenn ich einfach an dich denke, wenn ich überlege, wie ich mich fühle. Und wenn du erstmal anrufst oder ich bei dir bin, dann ist die Welt so viel schöner! Du bringst mich so oft zum Lächeln und Lachen. Du sorgst dafür, dass ich ein Zuhause habe und mich geborgen fühle. Du bist, ohne Übertreibung – und das meine ich komplett ehrlich mit vollster Überzeugung – das Wichtigste und Einflussreichste in meinem Leben. Du veränderst jeden einzelnen Tag von mir zum Besseren. Jeder Tag fühlt sich anders an, nur weil du da bist, und wenn du für ein paar Stunden weg bist, fühlt es sich unnatürlich an, weil du fehlst.
Baby, wenn du mir sagst, dass du mich heiraten willst, dann freue ich mich so sehr auf die Zukunft. Aber ich habe auch Angst, weil ich dir keine schlechte Rede halten möchte. Und wenn ich weiß, dass dein Geburtstag kommt, dann habe ich Angst, dass dir nicht gefällt, was ich dir schenke. Bevor wir zusammengekommen sind, hatte ich Angst, dass du Nein sagst – aber nicht, weil ich nicht dachte, dass du mich liebst, sondern weil ich Angst hatte, dass ich dich auf eine Art frage, die dir nicht gefällt und ich dich nicht richtig kenne. :(
Ich gebe mir viel Mühe, dir tolle Geschenke zu machen und die Zeit mit dir schön zu verbringen, weil ich dich so sehr wertschätze, weil ich dich nicht verlieren möchte. Du bist nicht irgendwer, sondern der wichtigste, wertvollste, angenehmste und am meisten verändernde Mensch in meinem Leben, und ich will dich glücklich sehen. Nicht für mich, sondern für dein Wohlbefinden. Ich will, dass du jemanden hast, auf den du dich verlassen kannst und du weißt, wo du Glück, Freude und Ruhe findest. Ich habe auch jetzt Angst, und ich glaube, die werde ich immer haben, weil ich dich verletzt habe und ich nicht möchte, dass ich durch falsche Worte und Taten dir noch einmal wehtue. Trotzdem macht es mich glücklich, wenn ich an Geschenken für dich arbeite und meine Gedanken für dich aufschreibe, weil ich weiß, dass es von Herzen kommt und ich auch wirklich das sage, was ich dir sagen will und nicht nur schreibe, damit es so wirkt. Und zu wissen, dass es für dich ist – nicht nur für meinen wichtigsten Menschen, sondern für dich als Individuum – macht mich so glücklich. Ich will DICH glücklich machen! Für mich bist du kein Platzhalter, wo steht „wichtigster Mensch: ___“ – für mich bist du einzigartig. Alles, was dich ausmacht, zum Beispiel wie du mit Nelli süß bist, wie du immer nachfragst, wie ich XY finde, wie du malst, wie du mit mir redest, mich berührst, wenn du Angst hast, wie du mich sein lässt, wer ich bin und wenn du dir Sorgen machst.
Ich bin für immer dankbar für das, was du zu meinem Leben beiträgst, und ich werde mir immer Mühe geben, dass ich das Glück, was du mir in mein Leben bringst, dir zurückgeben kann.
Ich könnte noch mindestens das Doppelte an Text schreiben und mir würden nicht die Wörter ausgehen, trotzdem komme ich hier zum Ende. Das ist eh nicht der letzte Liebesbrief, den ich dir schreibe. Danke, Charlotte, dass du mein Leben so einmalig veränderst, wie es sonst kein anderer Mensch kann.
Mit ganz, ganz, ganz viel umgekippter 8-Liebe, dein Baby Po~
(Vergiss nicht, ich liebe dich immer einmal mehr mwaaah)</p>
        </div>
      </div>
    `;
  } else {
    console.log("Element mit der ID 'geschenkContainer' nicht gefunden.");
  }
}

const slider = document.querySelector('.slider');
function updateSliderBackground() {
  const percent = (slider.value - slider.min) / (slider.max - slider.min) * 100;
  slider.style.background = `linear-gradient(to right, #009ca6 ${percent}%, #fff ${percent}%)`;
}
slider.addEventListener('input', updateSliderBackground);
updateSliderBackground(); // Initialer Zustand
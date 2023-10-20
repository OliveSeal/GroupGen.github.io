
//addEventListener "DOMContentLoaded" gjer at den venter til HTML sida har lasta inn fyrst.
document.addEventListener("DOMContentLoaded", () => {
  //og her henter det nokon DOM objekt  
  const generateButton = document.getElementById("generateButton");
  const peopleTextarea = document.getElementById("people");
  const numGroupsInput = document.querySelector(".numgroups");
  const outputDiv = document.getElementById("output");

  //denne EventListener venter på nå "Generate" knappen blir trykka
  generateButton.addEventListener("click", () => {
    //parseInt gjer at numGroups blir til ein Integer
    const numGroups = parseInt(numGroupsInput.value);
    //peopleTextarea blir splitta in i ein Array av namn, navna deles ved hjelp av linjeskift ("\n") og tomme linjer blir filtrert ut.
    const peopleList = peopleTextarea.value.trim().split('\n').filter(Boolean);

    //det er tekst outputen
    outputDiv.innerHTML = '';
    
    //sjekker om "numGroups" er eit gyldig tall og om det er nokk folk til å danne det oppgidde mengde grupper
    if (isNaN(numGroups) || numGroups <= 0 || peopleList.length < numGroups) {
      outputDiv.innerHTML = "Ugyldig inndata. Vennligst sjekk antall grupper og personer.";
      return;
    }

    //"shuffleArray" omorganiserer namna i arrayen tilfedig slikk at det blir ein tilfeldig rekkefølge
    shuffleArray(peopleList);

    //Koden lager deretter en array med tomme arrays, "groups" den er like lang som den oppgidde menge med grupper. Den fordeler namna i disse gruppene
    const groups = Array.from({ length: numGroups }, () => []);
    peopleList.forEach((person, index) => groups[index % numGroups].push(person));

//ShuffleArray funksjonen blander elementene i en array for å gjøre rekkefølgen tilfeldig
function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

    //Til slutt genererer koden HTML-kode for å vise gruppene i outputDiv. Den bruker "map" metoden til å generere en HTML-struktur for hver gruppe og kobler dei deretter til ein enkelt streng for å angi som innholdet i outputDiv.
    outputDiv.innerHTML = groups.map((group, index) => `
      <div>
        <h3>Group ${index + 1}:</h3>
        <ul>${group.map(person => `<li>${person}</li>`).join("")}</ul>
      </div>
    `).join("");
  });
});

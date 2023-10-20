
//addEventListener "DOMContentLoaded" gjer at den venter til HTML sida har lasta inn fyrst.
document.addEventListener("DOMContentLoaded", () => {
  //og her henter det nokon DOM objekt
  const generateButton = document.getElementById("generateButton");
  const peopleTextarea = document.getElementById("people");
  const numGroupsInput = document.querySelector(".numgroups");
  const outputDiv = document.getElementById("output");

  generateButton.addEventListener("click", () => {
    const numGroups = parseInt(numGroupsInput.value);
    const peopleList = peopleTextarea.value.trim().split('\n').filter(Boolean);

    outputDiv.innerHTML = '';
    
    if (isNaN(numGroups) || numGroups <= 0 || peopleList.length < numGroups) {
      outputDiv.innerHTML = "Invalid input. Please check the number of groups and people.";
      return;
    }

    shuffleArray(peopleList);

    const groups = Array.from({ length: numGroups }, () => []);

    peopleList.forEach((person, index) => groups[index % numGroups].push(person));

    outputDiv.innerHTML = groups.map((group, index) => `
      <div>
        <h3>Group ${index + 1}:</h3>
        <ul>${group.map(person => `<li>${person}</li>`).join("")}</ul>
      </div>
    `).join("");
  });
});

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}
document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const peopleTextarea = document.getElementById("people");
  const numGroupsInput = document.querySelector(".numgroups");
  const outputDiv = document.getElementById("output");
  
  generateButton.addEventListener("click", function () {
    const numGroups = parseInt(numGroupsInput.value);
    const peopleList = peopleTextarea.value.split('\n').filter(person => person.trim() !== '');

    outputDiv.innerHTML = ''; // Clear previous results

    if (isNaN(numGroups) || numGroups <= 0 || peopleList.length < numGroups) {
      outputDiv.innerHTML = "Invalid input. Please check the number of groups and people.";
      return;
    }

    // Shuffle the list of people
    for (let i = peopleList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [peopleList[i], peopleList[j]] = [peopleList[j], peopleList[i]];
    }

    // Split the shuffled list into groups
    const groups = Array.from({ length: numGroups }, () => []);

    peopleList.forEach((person, index) => {
      groups[index % numGroups].push(person);
    });

    // Display the groups
    groups.forEach((group, index) => {
      const groupDiv = document.createElement("div");
      groupDiv.innerHTML = `<h3>Group ${index + 1}:</h3><ul>${group.map(person => `<li>${person}</li>`).join("")}</ul>`;
      outputDiv.appendChild(groupDiv);
    });
  });
});

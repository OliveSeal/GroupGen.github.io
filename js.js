// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const peopleTextarea = document.getElementById("people");
    const numGroupsInput = document.querySelector(".numgroups");
    const outputDiv = document.getElementById("output");
  
    generateButton.addEventListener("click", function () {
      const numGroups = parseInt(numGroupsInput.value);
      const peopleList = peopleTextarea.value.trim().split("\n");
  
      // Remove any previous results
      outputDiv.innerHTML = "";
  
      if (isNaN(numGroups) || numGroups <= 0) {
        outputDiv.innerHTML = "Please enter a valid number of groups.";
        return;
      }
  
      if (peopleList.length < numGroups) {
        outputDiv.innerHTML = "Not enough people for the specified number of groups.";
        return;
      }
  
      shuffleArray(peopleList);
  
      const groups = [];
      for (let i = 0; i < numGroups; i++) {
        groups.push([]);
      }
  
      for (let i = 0; i < peopleList.length; i++) {
        const groupIndex = i % numGroups;
        groups[groupIndex].push(peopleList[i]);
      }
  
      // Display the groups
      groups.forEach((group, index) => {
        const groupDiv = document.createElement("div");
        groupDiv.innerHTML = `<h3>Group ${index + 1}:</h3><ul>${group.map(person => `<li>${person}</li>`).join("")}</ul>`;
        outputDiv.appendChild(groupDiv);
      });
    });
  });
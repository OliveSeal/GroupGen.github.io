function go() {
  // Get the input values for names and number from HTML elements
  var names = document.getElementById("names").value;
  var number = document.getElementById("number").value;

  // Split the names input into an array based on newline characters
  var name_list = names.split("\n");
  var group = [];

  // Create an array of empty groups based on the number provided
  for (var i = 0; i < number; i++) {
    group.push([]);
  }

  // Log the original list of names
  console.log(name_list);

  // Get the total number of names and initialize a group ID
  var size = name_list.length;
  var groupID = 0;

  // Randomly assign names to groups
  for (var i = 0; i < size; i++) {
    var rand = Math.floor(Math.random() * name_list.length);

    // Push the randomly selected name to the current group and remove it from the name list
    group[groupID].push(name_list[rand]);
    name_list.splice(rand, 1);

    // Move to the next group, or wrap around if the end is reached
    groupID++;
    if (groupID >= number) {
      groupID = 0;
    }
  }

  // Log the resulting groups
  console.log(group);

  // Generate HTML to display the groups and names
  var htmlresult = "";

  for (var i = 0; i < group.length; i++) {
    htmlresult += "<p><strong>GROUP " + (i + 1) + "</strong></p><ol>";

    // Add each name in the group as a list item
    for (var j = 0; j < group[i].length; j++) {
      htmlresult += "<li>" + group[i][j] + "</li>";
    }

    htmlresult += "</ol>";
  }

  // Set the HTML result in the "result" element
  document.getElementById("result").innerHTML = htmlresult;
}
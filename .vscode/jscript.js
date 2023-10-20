function go() {
    let names = document.getElementById("names").value;
    let number = document.getElementById("number").value;
    
    let name_list = names.split("\n");
    let group = [];
    
    for (let i = 0; i < number; i++) {
      group.push([]);
    }
    
    console.log(name_list);
    
    let size = name_list.length;
    let groupID = 0;
    for(let i= 0; i < size; i++) {
      let rand = Math.floor(Math.random() * name_list.length);
     
      group[groupID].push(name_list[rand]);
      name_list.splice(rand,1);
      
      groupID++;
      if(groupID >= number) {
        groupID = 0;
      }
    }
    
    console.log(group);
    
    let htmlresult = "";
    
    for(let i = 0; i < group.length; i++) {
      htmlresult += "<P> <STRONG> GROUP " + (i+1) + "</strong></p><ol>";
      for(let j = 0; j < group[i].length; j++) {
        htmlresult += "<li>"+ group[i][j]+ "</li>";
      }
      htmlresult += "</ol>";
    }
    
    document.getElementById("result").innerHTML = htmlresult;
  }
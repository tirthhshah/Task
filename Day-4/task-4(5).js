
 
  
  let input = prompt("enter a number");
 
 if(isNaN(input)){
    alert("enter valid input")
    document.writeln("Enter valid input")
           
  }
  else{
  
  let result = "";

 
  let group = input[0];

 
  for (let i = 1; i < input.length; i++) {

    
    let current = Number(input[i]);
    let previous = Number(input[i - 1]);

   
    if (current === previous + 1) {
      group = group + input[i];
    } else {
      result = result + group + " ";
      group = input[i];
    }
    
  }

  result = result + group;

 
  document.writeln("<h2>Input: " + input + "</h2>");
  document.writeln("<h2>Output: " + result + "</h2>");
  }


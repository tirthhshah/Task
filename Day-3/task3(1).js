
// 1. append a string with white space
function myfun(a) {
  return a + " Something";
}
document.writeln("<b>1.string add:</b> " + myfun("Add") + "<br><br>");


// 2. count length of digit
function len(num) {
  return num.toString().length;
}
document.writeln("<b>2. Length of digits:</b> " + len(10000) + "<br><br>");


// 3. check string includes "ee"
function check(str) {
  return str.includes("ee");
}
document.writeln("<b>3. Check string:</b><br>");
document.writeln("green = " + check("green") + "<br>");
document.writeln("greed = " + check("greed") + "<br>");
document.writeln("blue = " + check("blue") + "<br><br>");


// 4. multiplication table

let n = prompt("Enter any number for multiplication table");
if (n === null || n.trim() === "" || isNaN(n)){
    alert("enter valid input")
    document.writeln("<b>4. Multiplication Table </b><br>");
    document.writeln("enter valid input")
    document.writeln("<br>");

}
else{
document.writeln("<b>4. Multiplication Table </b><br>");
for (let i = 1; i <= 10; i++) {
  document.writeln(n + " * " + i + " = " + (n * i) + "<br>");
}}
document.writeln("<br>");



// 5. swap two digit numbers
let a = 34;
let b = 43;
document.writeln("<b>5. Swap numbers:</b><br>");
document.writeln("Before swap: a=" + a + ", b=" + b + "<br>");

let temp = a;
a = b;
b = temp;

document.writeln("After swap: a=" + a + ", b=" + b + "<br><br>");


// 6. right shift without operator
let p = 80;
let q = 3;
let z = 2 ** q;
let w = p / z;

document.writeln("<b>6. Right shift without operator:</b><br>");
document.writeln("Result: " + w + "<br><br>");


// 7. remove leading & trailing zeros
function removezero(n) {
  return Number(n).toString();
}
document.writeln("<b>7. Remove zeros:</b><br>");
document.writeln("230.000 = " + removezero("230.000") +"<br>");
document.writeln("00402 = " + removezero("00402") + "<br><br>");


// 8. count vowels
function countvowel(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}
document.writeln("<b>8. Count vowels:</b> " + countvowel("Festival Celebration")+"<br><br>"); 

//capital letters move to front.
document.writeln("<b>9. Capital letters to front</b><br>");

function move(str) {
  let cap = "";
  let small = "";

  for (let ch of str) {
    if (ch >= 'A' && ch <= 'Z') {
      cap += ch;
    } else {
      small += ch;
    }
  } 
  return cap + small;
}  

document.writeln('Input: "HellO GooDMornIng"<br>');
document.writeln("Output: " + move("HellO GooDMornIng")+"<br><br>");    


//10.sorted string using ascii 
document.writeln("<b>10. Sorted string based on ascii value.</b><br>");
function sorting(str){
     return  str.split("").sort().join("");
}

document.writeln("Input:","AcBd"+"<br>");
document.writeln("Output:",sorting("AcBd")+"<br><br>");


//11.Answer in single digit only
document.writeln("<b>11.Answer in single digit.</b><br>");

function digit(...num) {
  let sum = num.reduce((a, b) => a + b, 0);
  document.writeln("Sum = " + sum + "<br>");

  while (sum >= 10) {
    sum = sum
      .toString()
      .split("")
      .reduce((a,b) => a * Number(b),1);
    document.writeln( sum +"<br>");
  }
 return sum;
}

document.writeln("Final answer: " + digit(12,29)+"<br><br>");              



//12 factors of a number.
document.writeln("<b>12. Factors of a number</b>"+"<br>")
num=prompt("enter a number");

function factors(num) {
  if( num===null || num.trim()==="" || isNaN(num)){
    alert("enter valid input")
    document.writeln("enter a valid input");

  }
 else{
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}
}
document.writeln(num+":" + factors(num) + "<br><br>");

//13.capital and small letter as ascii value.
document.writeln("<b>13.Uppercase and lowercase as ascii value</b><br>");

function ascii(str) {
  let output = "";

  for (let ch of str) {
    let letter = ch.charCodeAt(0);

    if (letter % 2 === 0) {
      output += ch.toUpperCase();
    } else {
      output += ch.toLowerCase();
    }
  }
  return output;
}

document.writeln( "THIS IS THE SKY"+"<br>");
document.writeln( ascii("THIS IS THE SKY")+"<br><br>");


//14.Return highest and lowest number in a string.
document.writeln("<b>14.Highest and lowest number</b><br>");

function highLow(str) {
  let nums = str.split(" ");
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return max + " " + min;
}
document.writeln('Input: "1 2 2 9 4 5"<br>');
document.writeln(highLow("1 2 2 9 4 5"));
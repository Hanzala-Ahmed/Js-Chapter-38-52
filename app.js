// JS Chapter 38-42
// Q no 1
// function aRaisedb(){
//     var a = +prompt("Enter value of a");
//     var b = +prompt("Enter value of b which is raised to a");
//     var aRaisedb = Math.pow(a, b);
//     alert(aRaisedb)
// }
// aRaisedb();

// Q no 2
// function leapYear(){
//     var year = +prompt("Enter a year");
//     if(year % 4 === 0){
//         alert("The year is a leap year (It has 366 days)");
//     }
//     else{
//         alert("The year is not a leap year (It has 365 days)");
//     }
// }
// leapYear();

// Q no 3
// function areaOfTriangle(){
//     var sideA = +prompt("Enter length of side a");
//     var sideB = +prompt("Enter length of side b");
//     var sideC = +prompt("Enter length of side c");
//     var s = (sideA + sideB + sideC) / 2;
//     var areaOfTriangle = Math.sqrt(s*((s - sideA)*(s - sideB)*(s - sideC)))
//     alert("Area of triangle is " + areaOfTriangle)
// }
// areaOfTriangle();

// Q no 4
// function marksRecieve(){
// var marksEng = +prompt("Enter marks of English");
// var marksUrdu = +prompt("Enter marks of Urdu");
// var marksMaths = +prompt("Enter marks of Maths");
// function average() {
//   var marks = [marksEng, marksUrdu, marksMaths];
//   var a = 0;
//   for (var i = 0; i < marks.length; i++) {
//     a += marks[i];
//   }
//   var average = a / marks.length;
//   alert("Average of marks is " + average);
// }
// function percentage(){
//     var obtnMarks = marksEng + marksUrdu + marksMaths
//     var perc = (obtnMarks / 300) * 100
//     alert("Percentage is " + perc)
// }
// average();
// percentage();
// }
// marksRecieve();

// Q no 5
// function myFunction() {
//   var para =
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
//   var paraToArr = para.split("");
//   var getLetter = prompt(
//     "'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'                                                                                     Enter a letter form para to find index"
//   );
//   let index = paraToArr.findIndex((rank) => rank === getLetter);
//   console.log(index);
// }
// myFunction();

// Q no 6
// var sentence = prompt("Write a sentence that's not more than 25 characters");
// function removeVowels(a) {
//     var sentenceToArr = a.split("");
//   for (i = 0; i < sentence.length; i++) {
//       var char = sentence[i].toLowerCase()
//     if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//         sentenceToArr[i] = "";
//     }
//   }
//   var joining = sentenceToArr.join("");
//   console.log(joining);
// }
// removeVowels(sentence);

// Q no 7
// function findOccurence() {
//   var sentence = prompt("enter a sentence");
//   var words = sentence.split(" ");
//   document.write("Occurences are: ");
//   for (i = 0; i < words.length; i++) {
//     var char = words[i].split("");
//     for (a = 0; a < char.length; a++) {
//       var occur = char[a];
//       var occur1 = char[a + 1];
//       var occurence = occur + occur1;
//       var vowel = [
//         "ae",
//         "aa",
//         "ai",
//         "ao",
//         "au",
//         "ea",
//         "ee",
//         "ei",
//         "eo",
//         "eu",
//         "ia",
//         "ie",
//         "ii",
//         "io",
//         "iu",
//         "oa",
//         "oe",
//         "oi",
//         "oo",
//         "ou",
//         "ua",
//         "ue",
//         "ui",
//         "uo",
//         "uu",
//       ];
//       for (let index = 0; index < vowel.length; index++) {
//         switch (occurence) {
//           case vowel[index]:
//             document.write(" " + occurence);
//             break;
//         }
//       }
//     }
//   }
// }
// findOccurence();

// Q no 8
// var km = +prompt("Write adistance b/w any two cities in km");
// function kmToMeter(){
//     var kmToMeter = km * 1000;
//     document.write("kmToMeter = " + kmToMeter)
// }
// function kmToFeet(){
//     var kmToFeet = km * 3280.8;
//     document.write("<br>kmToFeet = " + kmToFeet)
// }
// function kmToInch(){
//     var kmToInch = km * 39370.1;
//     document.write("<br>kmToInch = " + kmToInch)
// }
// function kmToCentimeter(){
//     var kmToCentimeter = km * 100000;
//     document.write("<br>kmToCentimeter = " + kmToCentimeter)
// }
// kmToMeter();
// kmToFeet();
// kmToInch();
// kmToCentimeter();

// Q no 9
// function calcOvertimePay() {
//   var workedHours = +prompt("How many hours did you work?");
//   var fixedWorkedHours = workedHours.toFixed();
//   var overTimeHours = fixedWorkedHours - 40;
//   var overTimeHoursPay = overTimeHours * 12
//   if(workedHours >= 41){
//     console.log(overTimeHoursPay);
//   }
//   else{
//       console.log("Your'nt eligible");
//   }
// }
// calcOvertimePay();

// Q no 10
// var totalAmount = +prompt("Enter Total Amouny");
// var currency = [100, 50, 10];
// var note;
// for(i = 0; i < currency.length; i++){
//     if(totalAmount >= currency[i]){
//         note = totalAmount / 100;
//         var note100 = Math.floor(note);
//         note = totalAmount % 100;
//         note = note / 50;
//         var note50 = Math.floor(note);
//         note = totalAmount % 50;
//         var note10 = note / 10;
//         document.write("you will have " + note100 + " hundreds notes " + note50 + " fifty note " + note10 + " ten notes.");
//         break;
//     }
// }

// // JS Chp 43 - 48
// Q no 1
// function alertBox(){
//     alert();
// }

// // JS Chp 43 - 48
// Q no 2
// function showMessage(){
//     alert("Thanks for shopping")
// }

// // JS Chp 43 - 48
// Q no 3
// function deleteRow(a){
//     var parentNode = a.parentNode.parentNode;
//     parentNode.remove()
// }

// // JS Chp 43 - 48
// Q no 4
// function changeImage(a){
//     a.src = "./Images/1.jpg"
//     var att = a.setAttribute("onmouseout", "changeImageOnOut(this)")
// }
// function changeImageOnOut(a){
//     a.src = "./Images/2.jpg";
// }

// // JS Chp 43 - 48
// Q no 5
// function decrease(){
//     var value = document.getElementById("value");
//     var decrease = value.innerHTML - 1;
//     value.innerHTML = decrease
// }
// function increase(){
//     var value = document.getElementById("value");
//     var valueToNumber = parseFloat(value.innerHTML);
//     var decrease = valueToNumber + 1;
//     value.innerHTML = decrease
// }

// // JS Chp 49 - 52
// Q no 1
// function getData() {
//   var name = document.getElementById("name").value;
//   var number = document.getElementById("number").value;
//   var password = document.getElementById("password").value;
//   var reTypePassword = document.getElementById("reTypePassword").value;
//   document.write("Name : " + name + "<br>");
//   document.write("Number : " + number + "<br>");
//   document.write("Password : " + password + "<br>");
//   document.write("Re-Type Password : " + reTypePassword + "<br>");
// }

// // JS Chp 49 - 52
// Q no 2
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
var userInput = "";
var userInputArr = [];

function LanguageDictionary(merry, christmas, and, happy, newnew, year) {
  this.merry = merry;
  this.christmas = christmas;
  this.and = and;
  this.happy = happy;
  this.newnew = newnew;
  this.year = year;
}

var esperanto = new LanguageDictionary("feliĉan","kristnaskon","kaj","feliĉa","nova","jaro");
var german = new LanguageDictionary("fröhliche","weihnachten","und","glücklich","neu","jahr");
var spanish = new LanguageDictionary("feliz","navidad","y","feliz","nuevo","año");

function addButtonEvtListener() {
  document.getElementById("buttons").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "button");
      var funcGatherUserInput = gatherUserInput();
      //  e.target.id  use to identify which language
      //call translate function
  });

}

addButtonEvtListener();

function gatherUserInput() {
  var input = document.getElementById("translate-me").value;  //collects input from textarea element
  input = input.replace(/[^A-Za-z\s]/g, "").toLowerCase();  // keeps only letters and spaces
  var inputArr = input.split(" ");  //splits and stores in an array
  return inputArr;
}
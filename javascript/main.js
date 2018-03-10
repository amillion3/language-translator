//TODO
//set textarea as focus upon load, so user can start typing right away
//put IF statement in matchWords() into it's own function

var userInput = "";
var userInputArr = [];

function LanguageDictionary(merry, christmas, and, happy, newnew, year) {
  this.merry = merry;
  this.christmas = christmas;
  this.and = and;
  this.happy = happy;
  this.new = newnew;
  this.year = year;
}

var esperanto = new LanguageDictionary("feliĉan","kristnaskon","kaj","feliĉa","nova","jaro");
var german = new LanguageDictionary("fröhliche","weihnachten","und","glücklich","neu","jahr");
var spanish = new LanguageDictionary("feliz","navidad","y","feliz","nuevo","año");

function addButtonEvtListener() {
  document.getElementById("buttons").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "button");
      var funcGatherUserInput = gatherUserInput();
      var funcMatchWords = matchWords(funcGatherUserInput, e.target.id);
  });
}

function gatherUserInput() {
  var input = document.getElementById("translate-me").value;  //collects input from textarea element
  input = input.replace(/[^A-Za-z\s]/g, "").toLowerCase();  // keeps only letters and spaces
  var inputArr = input.split(" ");  //splits and stores in an array
  return inputArr;
}

function matchWords(inputArray, language) {
  var langDictionary = "";
  if (language === "esperanto") {
    langDictionary = esperanto;
  } else if (language === "german") {
    langDictionary = german;
  } else {
    langDictionary = spanish;
  }

  var matchedArrays = [];
  //should use forEach() instead
  for (var key in inputArray) {  // for...in to loop through the user input array
    console.log("1");
    for (var keyLang in langDictionary) {  // for...in to loop through the dictionary object
      if (inputArray[key] === keyLang) {
        matchedArrays.push(langDictionary[keyLang]);
      }
    } // for in
  }  //for in
  translateWords(matchedArrays);
}

function translateWords(translatedArray) {
  var output = "";
  translatedArray.forEach(function(element,index) {
    output += element;
  });
  writeToDom(output,"output-div");
}

function writeToDom(domString, domId) {
  document.getElementById(domId).innerHTML = domString;
}

addButtonEvtListener();
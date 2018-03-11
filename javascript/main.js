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
var italian = new LanguageDictionary("allegro","natale","e","contento","nuovo","anno");
var dutch = new LanguageDictionary("vrolijk","kerstmis","en","gelukkig","nieuwe","jaar");

function addButtonEvtListener() {
  document.getElementById("buttons").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "button");
      var funcGatherUserInput = gatherUserInput();
      var funcMatchWords = matchWords(funcGatherUserInput, e.target.id);
  });
}

function gatherUserInput() {
  var input = document.getElementById("translate-me").value;  //collects input from textarea element
  checkTextAreaLength(input);
  input = input.replace(/[^A-Za-z\s]/g, "").toLowerCase();  // keeps only letters and spaces
  var inputArr = input.split(" ");  //splits and stores in an array
  return inputArr;
}

function checkTextAreaLength (lengthCheck) {
  if (lengthCheck.length < 1) {
    //writeToDom(output,"output-div");
    writeToDom("<h1>lengthCheck</h1>","output-div");
  }
}

function checkLanguage(languageCheck) {
  if (languageCheck === "esperanto") {
    return esperanto;
  } else if (languageCheck === "german") {
    return german;
  } else if (languageCheck === "italian") {
    return italian;
  } else if (languageCheck === "dutch") {
    return dutch;
  } else if (languageCheck === 'spanish') {
    return spanish;
  } else {
    return randomLanguage();
  }
}

function randomLanguage() {
  var randomNum = Math.random();
  if (randomNum < 0.20) {
    return esperanto;
  } else if (randomNum < 0.39) {
    return german;
  } else if (randomNum < 0.59) {
    return italian;
  } else if (randomNum < 0.79) {
    return dutch;
  } else {
    return spanish;
  }
}

function matchWords(inputArray, language) {
  var langDictionary = checkLanguage(language);  //check and assign language

  var matchedArrays = [];
  for (var key in inputArray) {  // for...in to loop through the user input array
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
    output += element + " ";
  });
  writeToDom(output,"output-div");
}

function writeToDom(domString, domId) {
  document.getElementById(domId).innerHTML =  domString;
}

addButtonEvtListener();
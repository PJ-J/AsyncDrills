let logMessage = (str) => console.log(str);
// logMessage("hopdop");

let timeout;
let timeout2;
let timeout3;

// function myFunction() {
//   timeout = setTimeout(function () {
//     logMessage("jomby");
//   }, 3000);
// }

// myFunction();

function getWords() {
  console.log("instantly");
  timeout = setTimeout(function () {
    logMessage("3 secs later");
  }, 3000);
  timeout2 = setTimeout(function () {
    logMessage("2 secs later");
  }, 5000);
  timeout3 = setTimeout(function () {
    logMessage("1 sec later");
  }, 6000);
}

getWords();

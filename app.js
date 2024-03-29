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
// getWords();

function done() {
  console.log("Job's Done!");
}
function countdown(num, callback) {
  if (num === 0) {
    callback();
  } else {
    timeout = setTimeout(function () {
      countdown(num, callback);
    }, 1000);
    console.log(num);
    num--;
  }
}
// countdown(20, done);

let lunchTime = true;
const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    if (lunchTime) {
      let food = {
        lunch: "falafel",
        drink: "falafel juice",
      };
      resolve(food);
    } else {
      let err = new Error("error!");
      reject(err);
    }
  });
};
orderMeSomeFood()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

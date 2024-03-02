const repeatString = function (string, num) {
  let outPut = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      outPut += string;
    }
  } else {
    outPut = "ERROR";
  }

  return outPut;
};

// Do not edit below this line
module.exports = repeatString;

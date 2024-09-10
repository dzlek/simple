var countBits = function (n) {
  res = n
    .toString(2)
    .split("")
    .reduce((prev, cur) => prev + (cur === "1" ? 1 : 0), 0);

  console.log("return " + res);
};

countBits(7);

var whatTimeIsIt = function (angle) {
  if (angle % 360 === 0) return "12:00";

  const time = Math.floor(angle * 2);
  const hours = time < 60 ? 12 : Math.floor(time / 60);
  const minutes = time < 60 ? time : time - hours * 60;
  res =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  console.log("return" + res);

  return "12:00";
};

whatTimeIsIt(359.9);

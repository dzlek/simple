function strCount(obj) {
  let count = 0;

  function countString(value) {
    if (typeof value === "string") count++;
    if (typeof value === "object" && value !== null) {
      for (let keys in value) {
        countString(value[keys]);
      }
    }
  }
  countString(obj);

  console.log("return " + count);
}

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {},
});

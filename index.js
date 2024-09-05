function killer(suspectInfo, dead) {
  for (let suspect in suspectInfo) {
    if (dead.every((person) => suspectInfo[suspect].includes(person))) {
      console.log(suspect);
    }
  }
}

killer(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
);

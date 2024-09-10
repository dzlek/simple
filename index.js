function toWeirdCase(string) {
  const res = string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, index) =>
          index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join("")
    )
    .join(" ");
  return res;
}

console.log(toWeirdCase("This is a test"));

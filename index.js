function rgb(r, g, b) {
  const converter = (value) =>
    (value >= 255 ? 255 : value < 0 ? 0 : value)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();
  const res = converter(r) + converter(g) + converter(b);
  return res;
}

console.log(rgb(300, 255, 255));

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

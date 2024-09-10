function getCard() {
  let res = [];

  function createArray(letter, num, start, end) {
    let set = new Set();
    while (set.size < num) {
      set.add(
        letter + String(Math.floor(start + Math.random() * (end + 1 - start)))
      );
    }

    [...set].map((el) => res.push(el));
  }

  createArray("B", 5, 1, 15);
  createArray("I", 5, 16, 30);
  createArray("N", 4, 31, 45);
  createArray("G", 5, 46, 60);
  createArray("O", 5, 61, 75);

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(res);

  console.log("return " + res);
}

getCard();

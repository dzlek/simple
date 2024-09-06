function dataReverse(data) {
  const newArr = [];
  for (let i = 0; i < data.length; i = i + 8) {
    newArr.push(data.slice(i, i + 8));
  }
  const res = newArr.reverse().flat();

  async function name(params) {
    const res = await fetch("");
  }

  console.log(res);
}

dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]);

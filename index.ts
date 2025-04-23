console.log("start");

// const myPromise = new Promise((resolve, reject) => resolve(2))
//   .then((number) => {
//     console.log(number ** 2);
//     return number ** 2;
//   })
//   .then((number) => console.log(number ** 2));

// const squаre = {
//   side: 10,
//   ea() {
//     return this.side * this.side;
//   },
//   perimeter: () => 2 * this.side,
// };

// console.log(squаre.ea()); //100
// console.log(squаre.perimeter()); //NaN

// console.log(undefined * 2);

//Task1
let a = 2;
let b = 3;
export const sum = (a, b) => a + b;

//Task2
const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps(array1));


//Task3
export function areYouPlayingBanjo(name: string): string {
  return name[0].toLowerCase() === 'r' ? name + " plays banjo" : name + " does not play banjo"
}

console.log(areYouPlayingBanjo("rartin"));
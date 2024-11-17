// // // let number = 4.6;
// // // console.log(-4 / 0);
// // // console.log("string" * 9);

// // // const person = "yuriy";
// // // console.log(person);

// // // const bool = true;

// // // console.log(hello);

// // // let und;

// // const obj = {
// //   name: "yuriy",
// //   age: 25,
// //   isMarried: false,
// //   haveCar: true,
// //   sistersName: "anna",
// // };

// // // console.log(obj.sistersName);
// // // console.log(obj["sistersName"]);

// // let arr = ["plum.png", "orange.jpg", 6, "apple.bmp"];
// // console.log(arr[1]);

// // const arr = [1, 2, 3];
// // console.log(arr[2]);

// // const obj = { a: 1, b: 2 };
// // const obj = {
// //   anna: 500,
// //   alice: 800,
// // };
// // console.log(obj.anna);
// const arr = ["a", "b", "c"];

// arr[10] = "3456";
// console.log(arr);

// const arrObj = {
//   0: "a",
//   1: "b",
//   2: "c",
//   abc: {
//     df: [{}, {}],
//     def: {},
//   },
// };

// const b = "b";

// // arrObj.b = "1234";
// arrObj[b] = "1234";

// // console.log(arr[1]);
// console.log(arrObj["b"]);
// console.log(arrObj.b);

// const obj = {
//   anna: 500,
//   alice: 800,
// };

// ///OEFENINGEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!=================================

// let restaurantName = "KFC";

// const restaurantDetails = {
//   seatingCapacity: 50,
//   menu: { steak: 35, videe: 12, tomatensoep: 12 },
//   staff: ["stiene", "lola", "david", "joeri"],
//   isOpen: true,
// };

// let bedrijfNaam = "noteblanch";

// const bedrijfBeschrijving = {
//   omzet: 50000,
//   medewerkers: ["seleste", "kim", "bart", "ludo"],
//   diensten: { bartenden: 20, souschef: 50, afwasser: 60 },
//   actief: true,
// };
// console.log(bedrijfBeschrijving);

//commands basic JAVASCRIPT============================================

// alert("hello");
// const result = confirm("Are you here?");
// console.log(result);
// const answer = +prompt("are you 18years old?", "18");
// console.log(answer + 5);

//MASIVE DATA==========================================================
// const answers = [];

// answers[0] = prompt("what is your name", "");
// answers[1] = prompt("what is your lastname", "");
// answers[2] = prompt("what is the color of your car", "");

// console.log(typeof answers);
// console.log(typeof null);

///: string-manipulatie en interpolatie.=================================
// const category = "toys";
// console.log("https://someurl.com/" + category + "/" + "19");
// console.log(`https://someurl.com/${category}/19`);

// const user = "yuriy";
// alert(`Hallo, ${user}`);

//Aritmetische operatoren =========================================
// console.log("error" + "- object");
// console.log(4 + "5");

let incr = 10,
  decr = 10;
//prefix
++incr;
--decr;
//postfix
incr++;
decr--;

console.log(++incr);
console.log(--decr);

console.log(incr);
console.log(decr);

console.log(5 % 2);

console.log(2 + 2 * 2 != "6");

// const isChecked = true,
//   isClose = true;
// console.log(isChecked && isClose);

// const isChecked = false,
//   isClose = false;
// console.log(isChecked || !isClose);

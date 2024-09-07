let numbersAPI = "http://numbersapi.com";

let favNumber = 7;

//Part 1:

async function part1() {
     let data = await $.getJSON(`${numbersAPI}/${favNumber}?json`);
     console.log("Part 1:", data);
}
part1();

//Part 2:

let numbers = [3, 5, 17];

async function part2() {
     let data = await $.getJSON(`${numbersAPI}/${numbers}?json`);
     console.log("Part 2:", data);
}
part2();

// Part 3:

async function part3() {
     let facts = Promise.all(
          Array.from({ length: 4 }, () => {
               return $.getJSON(`${numbersAPI}/${favNumber}?json`);
          })
     ).then((facts) => {
          facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
     });
}
part3();

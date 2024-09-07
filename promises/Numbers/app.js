let numbersAPI = "http://numbersapi.com";

let favNumber = 7;

//Part 1:

$.getJSON(`${numbersAPI}/${favNumber}?json`).then((data) => {
     console.log("Part 1:", data);
});

//Part 2:

let numbers = [3, 5, 17];
$.getJSON(`${numbersAPI}/${numbers}?json`).then((data) => {
     console.log("Part 2:", data);
});

// Part 3:

//again I did not know how to really do this so I had to look at the answer key.

Promise.all(
     Array.from({ length: 4 }, () => {
          return $.getJSON(`${numbersAPI}/${favNumber}?json`);
     })
).then((facts) => {
     facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});

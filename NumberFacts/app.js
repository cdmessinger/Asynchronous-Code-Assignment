let numbersAPI = "http://numbersapi.com";

let favNumber = 7;

//had to look at the solution guide to figure out that I needed use jQuery. Very annoyed that this is not said in the assignemnt :)

//Part 1:

$.getJSON(`${numbersAPI}/${favNumber}?json`, function (data) {
     console.log("Part 1:", data);
});

//Part 2:

let numbers = [3, 5, 17];
$.getJSON(`${numbersAPI}/${numbers}?json`, function (data) {
     console.log("Part 2:", data);
});

// This was my first attempt, leaving it in for progress.
// function numberFacts(arr) {
//      const newArr = [];

//      for (let i = 0; i < arr.length; i++) {
//           let result = $.getJSON(
//                `${numbersAPI}/${arr[i]}?json`,
//                function (data) {
//                     console.log(data);
//                }
//           );
//           newArr.push(result);
//      }
//      return newArr;
// }

// Part 3:

let facts = [];

$.getJSON(`${numbersAPI}/${favNumber}?json`, function (data) {
     facts.push(data.text);
     $.getJSON(`${numbersAPI}/${favNumber}?json`, function (data) {
          facts.push(data.text);
          $.getJSON(`${numbersAPI}/${favNumber}?json`, function (data) {
               facts.push(data.text);
               $.getJSON(`${numbersAPI}/${favNumber}?json`, function (data) {
                    facts.push(data.text);
                    facts.forEach((fact) => {
                         $("body").append(`<p>${fact}<p>`);
                    });
               });
          });
     });
});

console.log("Part 3:", facts);

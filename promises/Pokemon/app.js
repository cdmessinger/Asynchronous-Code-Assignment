const baseURL = "https://pokeapi.co/api/v2/";

//1.

$.getJSON(`${baseURL}pokemon/248/`).then((data) => {
     console.log("Part 1:", data.name);
});

//2. Note 1025 is the maximum number of pokemon

let randomPokemonId1 = Math.floor(Math.random() * 1025);
let randomPokemonId2 = Math.floor(Math.random() * 1025);
let randomPokemonId3 = Math.floor(Math.random() * 1025);

// $.getJSON(`${baseURL}pokemon/${randomPokemonId1}/`).then((data) => {
//      let pokemon1 = data.name;
//      console.log("Part 2:");
//      console.log(randomPokemonId1, pokemon1);
//      $.getJSON(`${baseURL}pokemon/${randomPokemonId2}/`).then((data) => {
//           let pokemon2 = data.name;
//           console.log(randomPokemonId2, pokemon2);
//           $.getJSON(`${baseURL}pokemon/${randomPokemonId3}/`).then((data) => {
//                let pokemon3 = data.name;
//                console.log(randomPokemonId3, pokemon3);
//           });
//      });
// });

//3.
// https://pokeapi.co/api/v2/pokemon-species/{id or name}/

$.getJSON(`${baseURL}pokemon/${randomPokemonId1}/`).then((data) => {
     let pokemon1 = data.name;
     console.log("Part 3:");
     $.getJSON(`${baseURL}pokemon-species/${pokemon1}`).then((data) => {
          let flavorText1 = data.flavor_text_entries.find(
               (entry) => entry.language.name === "en"
          );
          console.log(randomPokemonId1, pokemon1, flavorText1);
     });
     $.getJSON(`${baseURL}pokemon/${randomPokemonId2}/`).then((data) => {
          let pokemon2 = data.name;
          $.getJSON(`${baseURL}pokemon-species/${pokemon2}`).then((data) => {
               let flavorText2 = data.flavor_text_entries.find(
                    (entry) => entry.language.name === "en"
               );
               console.log(randomPokemonId2, pokemon2, flavorText2);

               $.getJSON(`${baseURL}pokemon/${randomPokemonId3}/`).then(
                    (data) => {
                         let pokemon3 = data.name;
                         $.getJSON(
                              `${baseURL}pokemon-species/${pokemon3}`
                         ).then((data) => {
                              let flavorText3 = data.flavor_text_entries.find(
                                   (entry) => entry.language.name === "en"
                              );
                              console.log(
                                   randomPokemonId3,
                                   pokemon3,
                                   flavorText3
                              );
                         });
                    }
               );
          });
     });
});

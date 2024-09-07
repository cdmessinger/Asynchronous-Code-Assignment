const baseURL = "https://pokeapi.co/api/v2/";

//1.

async function part1() {
     let data = await $.getJSON(`${baseURL}pokemon/248/`);
     console.log("Part 1:", data.name);
}
part1();

//2. Note 1025 is the maximum number of pokemon

let randomPokemonId1 = Math.floor(Math.random() * 1025);
let randomPokemonId2 = Math.floor(Math.random() * 1025);
let randomPokemonId3 = Math.floor(Math.random() * 1025);

// async function part2() {
//      let data1 = await $.getJSON(`${baseURL}pokemon/${randomPokemonId1}/`);
//      let pokemon1 = data1.name;
//      let data2 = await $.getJSON(`${baseURL}pokemon/${randomPokemonId2}/`);
//      let pokemon2 = data2.name;
//      let data3 = await $.getJSON(`${baseURL}pokemon/${randomPokemonId3}/`);
//      let pokemon3 = data3.name;
//      console.log(randomPokemonId1, pokemon1);
//      console.log(randomPokemonId2, pokemon2);
//      console.log(randomPokemonId2, pokemon2);
// }
// part2();

//3.
// https://pokeapi.co/api/v2/pokemon-species/{id or name}/

async function part3() {
     try {
          //pokemon 1
          let data1 = await $.getJSON(`${baseURL}pokemon/${randomPokemonId1}/`);
          let pokemon1 = data1.name;
          let speciesData1 = await $.getJSON(
               `${baseURL}pokemon-species/${pokemon1}/`
          );
          let flavorTextEntry1 = await speciesData1.flavor_text_entries.find(
               (entry) => entry.language.name === "en"
          );
          console.log([randomPokemonId1, pokemon1, flavorTextEntry1]);
          //pokemon 2
          let data2 = await $.getJSON(`${baseURL}pokemon/${randomPokemonId2}/`);
          let pokemon2 = data2.name;
          let speciesData2 = await $.getJSON(
               `${baseURL}pokemon-species/${pokemon2}/`
          );
          let flavorTextEntry2 = await speciesData1.flavor_text_entries.find(
               (entry) => entry.language.name === "en"
          );
          console.log([randomPokemonId2, pokemon2, flavorTextEntry2]);
          //pokemon 3
          let data3 = await $.getJSON(`${baseURL}pokemon/${randomPokemonId3}/`);
          let pokemon3 = data3.name;
          let speciesData3 = await $.getJSON(
               `${baseURL}pokemon-species/${pokemon3}/`
          );
          let flavorTextEntry3 = await speciesData1.flavor_text_entries.find(
               (entry) => entry.language.name === "en"
          );
          console.log([randomPokemonId3, pokemon3, flavorTextEntry3]);
     } catch (err) {
          console.log(err);
     }
}
part3();

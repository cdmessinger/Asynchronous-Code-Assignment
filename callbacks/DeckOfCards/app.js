const deckAPI = "https://deckofcardsapi.com/api/deck";

let numberOfCards = 1;

$.getJSON(`${deckAPI}/new/draw/?count=${numberOfCards}`, function (data) {
     let { suit, value } = data.cards[0];
     console.log("PART 1:");
     console.log(`${value} of ${suit}`);
});

let numberOfCards2 = 2;

$.getJSON(`${deckAPI}/new/draw/?count=${numberOfCards2}`, function (data) {
     let deckId = data.deck_id;
     let firstCard = data.cards[0];
     console.log("Part 2:");
     $.getJSON(
          `${deckAPI}/${deckId}/draw/?count=${numberOfCards2}`,
          function (data) {
               let secondCard = data.cards[0];
               console.log(`1st card: ${firstCard.value} of ${firstCard.suit}`);
               console.log(
                    `2nd card: ${secondCard.value} of ${secondCard.suit}`
               );
          }
     );
});

// I had to look at the solution guide because this was not taught to me in this course. Why am I suddenly expected to know how to use jQuery? Why am i suddenly expected to know how to manipulate html in javascript even though it was not covered in this course so far?

let deckId = null;
let $btn = $("button");
let $cardArea = $("#card-area");

$.getJSON(`${deckAPI}/new/shuffle/`, function (data) {
     deckId = data.deck_id;
     $btn.show();
});

$btn.on("click", function () {
     $.getJSON(`${deckAPI}/${deckId}/draw/`, function (data) {
          let cardSrc = data.cards[0].image;
          $cardArea.append(
               $(`<img>`, {
                    src: cardSrc,
               })
          );
          if (data.remaining === 0) $btn.remove();
     });
});

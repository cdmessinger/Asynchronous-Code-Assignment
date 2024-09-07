const deckAPI = "https://deckofcardsapi.com/api/deck";

let numberOfCards = 1;

$.getJSON(`${deckAPI}/new/draw/?count=${numberOfCards}`).then((data) => {
     let { suit, value } = data.cards[0];
     console.log("PART 1:");
     console.log(`${value} of ${suit}`);
});

let numberOfCards2 = 2;

$.getJSON(`${deckAPI}/new/draw/?count=${numberOfCards2}`).then((data) => {
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

let deckId = null;
let $btn = $("button");
let $cardArea = $("#card-area");

$.getJSON(`${deckAPI}/new/shuffle/`).then((data) => {
     deckId = data.deck_id;
     $btn.show();
});

$btn.on("click", function () {
     $.getJSON(`${deckAPI}/${deckId}/draw/`).then((data) => {
          let cardSrc = data.cards[0].image;
          $cardArea.append(
               $(`<img>`, {
                    src: cardSrc,
               })
          );
          if (data.remaining === 0) $btn.remove();
     });
});

const deckAPI = "https://deckofcardsapi.com/api/deck";

let numberOfCards = 1;

async function part1() {
     let data = await $.getJSON(`${deckAPI}/new/draw/?count=${numberOfCards}`);
     let { suit, value } = data.cards[0];
     console.log("Part 1:", `${value} of ${suit}`);
}
part1();

let numberOfCards2 = 2;

async function part2() {
     let data = await $.getJSON(`${deckAPI}/new/draw/?count=${numberOfCards2}`);
     let firstCard = data.cards[0];
     let secondCard = data.cards[1];
     console.log("First Card:", `${firstCard.value} of ${firstCard.suit}`);
     console.log("Second Card:", `${secondCard.value} of ${secondCard.suit}`);
}
part2();

async function setup() {
     let $btn = $("button");
     let $cardArea = $("#card-area");

     let data = await $.getJSON(`${deckAPI}/new/shuffle/`);
     $btn.show().on("click", async function () {
          let cardData = await $.getJSON(`${deckAPI}/${data.deck_id}/draw/`);
          let cardSrc = cardData.cards[0].image;
          $cardArea.append(
               $(`<img>`, {
                    src: cardSrc,
               })
          );
          if (cardData.remaining === 0) $btn.remove();
     });
}

const fetch = require('node-fetch');
const pickOne = require('../pick').pickOne;

const baseUrl = 'https://cards-against-humanity-api.herokuapp.com';

module.exports = (req, res) => {
  const { set = 'Base' } = req.query

  const url = `${baseUrl}/sets/${set}`;
  console.debug("Requesting", url);

  fetch(url)
  .then(cahResp => cahResp.json())
  .then(cahJson => {
    const { blackCards, whiteCards } = cahJson;
    const pickedBlackCard = pickOne(blackCards);
    console.debug('Picked black card', pickedBlackCard);

    const pickedWhiteCards =
        Array.from({length:pickedBlackCard.pick})
          .map(value => pickOne(whiteCards));
    console.debug('Picked white cards', pickedWhiteCards);

    res.status(200).send({
      blackCard: pickedBlackCard.text,
      whiteCards: pickedWhiteCards
    });
  });
}
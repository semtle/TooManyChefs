var React = require('react');

/* Bonus round! */
var MashedPotatoes = {
  name: 'Mashed Potatoes',
  chefName: 'Garçon de cuisine',
  type: 'entrée',
  record: 'count',
  difficulty: 'easy',
  lives: 1,
  ingredients: ['potatoes', 'more potatoes', 'strength', 'determination'],
  description: 'BONUS ROUND: mash the potatoes as fast as possible!',

  /* A recipe is a list of json steps */
  steps: [
    {
      pretext: <span>Mash the potatoes <b className="fireRed blink">as fast as possible</b>!<br/></span>,
      type: 'mash',
      instruction: 'm',
      mashCount: 0, // count up
      timer: 10,
      onTimeout: function(progress) {
        if (progress > 0) {
          this.nextStep();
        } else {
          this.failure();
        }
      },
    },
  ],
};

module.exports = MashedPotatoes;
const MEN = [
  '👦🏻',
  '👨🏻',
  '👴🏻',
];

const WOMEN = [
  '👧🏻',
  '👩🏻',
  '👵🏻',
];

/**
 * Generate integer in <0, max - 1>
 *
 * @param {number} max
 *
 * @returns {number}
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const getRandomMan = () => MEN[getRandomInt(MEN.length)];

const getRandomWoman = () => WOMEN[getRandomInt(WOMEN.length)];

export const getRandomEmoji = sex => {
  switch (sex) {
    case 'male':
      return getRandomMan();
    case 'female':
      return getRandomWoman();
  }
};

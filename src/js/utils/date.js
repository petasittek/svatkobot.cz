const MONTHS = {
  1: {
    name: 'ledna',
    slug: 'ledna',
    emoji: '❄️',
  },
  2: {
    name: 'února',
    slug: 'unora',
    emoji: '⛄️',
  },
  3: {
    name: 'března',
    slug: 'brezna',
    emoji: '🌱',
  },
  4: {
    name: 'dubna',
    slug: 'dubna',
    emoji: '🤪',
  },
  5: {
    name: 'května',
    slug: 'kvetna',
    emoji: '❤️',
  },
  6: {
    name: 'června',
    slug: 'cervna',
    emoji: '🌻',
  },
  7: {
    name: 'července',
    slug: 'cervence',
    emoji: '☀️',
  },
  8: {
    name: 'srpna',
    slug: 'srpna',
    emoji: '🌴',
  },
  9: {
    name: 'září',
    slug: 'zari',
    emoji: '🎓',
  },
  10: {
    name: 'října',
    slug: 'rijna',
    emoji: '⛅️',
  },
  11: {
    name: 'listopadu',
    slug: 'listopadu',
    emoji: '🍂',
  },
  12: {
    name: 'prosince',
    slug: 'prosince',
    emoji: '🎅🏻',
  },
};

export const getDateText = iso => {
  let [month, day] = iso.split('-').map(n => parseInt(n));

  return `${day}. ${MONTHS[month].name}`;
};

export const getDateAnchor = iso => {
  let [month, day] = iso.split('-').map(n => parseInt(n));

  return `${day}.${MONTHS[month].slug}`;
};

export const getMonthAnchor = month => `1.${MONTHS[month].slug}`;

export const getMonthEmoji = month => MONTHS[month].emoji;

export const getMonthFirstLetter = month => MONTHS[month].name.substring(0, 1);

export const getTodayAnchor = () => {
  let iso = (new Date()).toISOString().split('T')[0].slice(-5);

  return getDateAnchor(iso);
};

const MONTHS = {
  1: {
    name: 'leden',
    slug: 'leden',
    emoji: '❄️',
  },
  2: {
    name: 'únor',
    slug: 'unor',
    emoji: '🏂',
  },
  3: {
    name: 'březen',
    slug: 'brezen',
    emoji: '🌱',
  },
  4: {
    name: 'duben',
    slug: 'duben',
    emoji: '🐥',
  },
  5: {
    name: 'květen',
    slug: 'kveten',
    emoji: '❤️',
  },
  6: {
    name: 'červen',
    slug: 'cerven',
    emoji: '🌻',
  },
  7: {
    name: 'červenec',
    slug: 'cervenec',
    emoji: '☀️',
  },
  8: {
    name: 'srpen',
    slug: 'srpen',
    emoji: '🌾',
  },
  9: {
    name: 'září',
    slug: 'zari',
    emoji: '🎓',
  },
  10: {
    name: 'říjen',
    slug: 'rijen',
    emoji: '⛅️',
  },
  11: {
    name: 'listopad',
    slug: 'listopad',
    emoji: '🍂',
  },
  12: {
    name: 'prosinec',
    slug: 'prosinec',
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

export const getMonthName = month => MONTHS[month].name;

export const getTodayAnchor = () => {
  let iso = (new Date()).toISOString().split('T')[0].slice(-5);

  return getDateAnchor(iso);
};

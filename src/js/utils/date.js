const MONTHS = [
  'ledna',
  'února',
  'března',
  'dubna',
  'května',
  'června',
  'července',
  'srpna',
  'září',
  'října',
  'listopadu',
  'prosince',
];

const MONTHS_ASCII = [
  'ledna',
  'unora',
  'brezna',
  'dubna',
  'kvetna',
  'cervna',
  'cervence',
  'srpna',
  'zari',
  'rijna',
  'listopadu',
  'prosince',
];

export const getDateText = iso => {
  let [month, day] = iso.split('-').map(n => parseInt(n));

  return `${day}. ${MONTHS[month - 1]}`;
};

export const getDateAnchor = iso => {
  let [month, day] = iso.split('-').map(n => parseInt(n));

  return `${day}.${MONTHS_ASCII[month - 1]}`;
};

export const getTodayAnchor = () => {
  let iso = (new Date()).toISOString().split('T')[0].slice(-5);

  return getDateAnchor(iso);
};

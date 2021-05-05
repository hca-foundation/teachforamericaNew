const states = [
  {
    value: 'AL',
    name: 'Alabama',
  },
  {
    value: 'AK',
    name: 'Alaska',
  },
  {
    value: 'AZ',
    name: 'Arizona',
  },
  {
    value: 'AR',
    name: 'Arkansas',
  },
  {
    value: 'CA',
    name: 'California',
  },
  {
    value: 'CO',
    name: 'Colorado',
  },
  {
    value: 'CT',
    name: 'Connecticut',
  },
  {
    value: 'DE',
    name: 'Delaware',
  },
  {
    value: 'DC',
    name: 'District Of Columbia',
  },
  {
    value: 'FL',
    name: 'Florida',
  },
  {
    value: 'GA',
    name: 'Georgia',
  },
  {
    value: 'HI',
    name: 'Hawaii',
  },
  {
    value: 'ID',
    name: 'Idaho',
  },
  {
    value: 'IL',
    name: 'Illinois',
  },
  {
    value: 'IN',
    name: 'Indiana',
  },
  {
    value: 'IA',
    name: 'Iowa',
  },
  {
    value: 'KS',
    name: 'Kansas',
  },
  {
    value: 'KY',
    name: 'Kentucky',
  },
  {
    value: 'LA',
    name: 'Louisiana',
  },
  {
    value: 'ME',
    name: 'Maine',
  },
  {
    value: 'MD',
    name: 'Maryland',
  },
  {
    value: 'MA',
    name: 'Massachusetts',
  },
  {
    value: 'MI',
    name: 'Michigan',
  },
  {
    value: 'MN',
    name: 'Minnesota',
  },
  {
    value: 'MS',
    name: 'Mississippi',
  },
  {
    value: 'MO',
    name: 'Missouri',
  },
  {
    value: 'MT',
    name: 'Montana',
  },
  {
    value: 'NE',
    name: 'Nebraska',
  },
  {
    value: 'NV',
    name: 'Nevada',
  },
  {
    value: 'NH',
    name: 'New Hampshire',
  },
  {
    value: 'NJ',
    name: 'New Jersey',
  },
  {
    value: 'NM',
    name: 'New Mexico',
  },
  {
    value: 'NY',
    name: 'New York',
  },
  {
    value: 'NC',
    name: 'North Carolina',
  },
  {
    value: 'ND',
    name: 'North Dakota',
  },
  {
    value: 'OH',
    name: 'Ohio',
  },
  {
    value: 'OK',
    name: 'Oklahoma',
  },
  {
    value: 'OR',
    name: 'Oregon',
  },
  {
    value: 'PA',
    name: 'Pennsylvania',
  },
  {
    value: 'RI',
    name: 'Rhode Island',
  },
  {
    value: 'SC',
    name: 'South Carolina',
  },
  {
    value: 'SD',
    name: 'South Dakota',
  },
  {
    value: 'TN',
    name: 'Tennessee',
  },
  {
    value: 'TX',
    name: 'Texas',
  },
  {
    value: 'UT',
    name: 'Utah',
  },
  {
    value: 'VT',
    name: 'Vermont',
  },
  {
    value: 'VA',
    name: 'Virginia',
  },
  {
    value: 'WA',
    name: 'Washington',
  },
  {
    value: 'WV',
    name: 'West Virginia',
  },
  {
    value: 'WI',
    name: 'Wisconsin',
  },
  {
    value: 'WY',
    name: 'Wyoming',
  },
];

const grades = [
  {
    value: 'Kindergarten',
  },
  {
    value: '1st Grade',
  },
  {
    value: '2nd Grade',
  },
  {
    value: '3rd Grade',
  },
  {
    value: '4th Grade',
  },
  {
    value: '5th Grade',
  },
  {
    value: '6th Grade',
  },
  {
    value: '7th Grade',
  },
  {
    value: '8th Grade',
  },
  {
    value: '9th Grade',
  },
  {
    value: '10th Grade',
  },
  {
    value: '11th Grade',
  },
  {
    value: '12th Grade',
  },
];

const summerSchoolSites = [
  {
    value: 'Gra-Mar Elementary (current K-4)',
  },
  {
    value: 'Gra-Mar Middle (current 5-8)',
  },
  {
    value: 'Wright Middle (current 5-8)',
  },
];

const numberInHousehold = [
  {
    value: '2 persons',
  },
  {
    value: '3 persons',
  },
  {
    value: '4 persons',
  },
  {
    value: '5 persons',
  },
  {
    value: '6 persons',
  },
  {
    value: '7 persons',
  },
  {
    value: '8 persons',
  },
];

const grossIncomes = [
  {
    value: '$0 – $30,045',
  },
  {
    value: '$30,041 - $38,442',
  },
  {
    value: '$38,443 - $46,434',
  },
  {
    value: '$46,435 - $54,426',
  },
  {
    value: '$54,427 – $62,418',
  },
  {
    value: '$62,419 - $70,410',
  },
  {
    value: 'Over $70,411',
  },
];

const ethnicities = [
  {
    value: 'Alaskan, Native, or American Indian',
    selected: false,
  },
  {
    value: 'Asian',
    selected: false,
  },
  {
    value: 'Black or African-American',
    selected: false,
  },
  {
    value: 'Latino or Hispanic',
    selected: false,
  },
  {
    value: 'Middle Eastern, North African, or Arab American',
    selected: false,
  },
  {
    value: 'White',
    selected: false,
  },
];

const getDate = () => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  return year + "/" + month + "/" + day;
};

const getStates = () => states;

const getGrades = () => grades;

const getSummerSchoolSites = () => summerSchoolSites;

const getNumberInHousehold = () => numberInHousehold;

const getIncomes = () => grossIncomes;

const getEthnicities = () => ethnicities;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDate,
  getStates,
  getGrades,
  getSummerSchoolSites,
  getNumberInHousehold,
  getIncomes,
  getEthnicities,
};

// 1. Write a function that accepts an array of strings. Return the longest string.
let one = ['Rumsan', 'Tech', 'is', 'an', 'IT', 'Company'];

const longestOne = (arr) => {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
};

console.log(longestOne(one));

// 2. Write a function that sanitizes the string in proper case string
const sanitize = (str) => {
  return str.split('_').join(' ').toUpperCase();
};

console.log(sanitize('ORG_ADMIN'));
console.log(sanitize('role_admin'));

// 3. Write a function that formats the ISO Date to Local date and time in the give format
const toLocal = (isoDate) => {
  const newDate = new Date(isoDate)
    .toLocaleString('default', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    .split(' ')
    .map((a) => a.replace(',', ''));

  return `${newDate[1]}${
    newDate[1] % 10 === 1
      ? 'st'
      : newDate[1] % 10 === 2
      ? 'nd'
      : newDate[1] % 10 === 3
      ? 'rd'
      : 'th'
  } ${newDate[0]} ${newDate[2]} at ${newDate[3]} ${newDate[4]}`;
};
console.log(toLocal('2021-02-23T17:56:17.366+00:00'));

// 4. Write a function that splits the person's full name into proper first name, middle
const person = (str) => {
  let newArr = str.split(' ');
  newArr.length !== 3 ? newArr.splice(1, 0, ' ') : (newArr[1] = newArr[1]);
  return [
    {
      first: newArr[0],
      middle: newArr[1],
      last: newArr[2],
    },
  ];
};
console.log(person('Ram Bahadur Shah'));

// 5. Write a function that converts an array item to string.
const arrToString = (arr) => arr.join(' ');
console.log(arrToString(['Hello', 'World']));

// 6. Check if the element exists in the array.
const isElement = (arr, key) => arr.includes(key);
console.log(isElement(['test', 'exam', 'competition'], 'exam'));

// 7. Determine if an object already exists in an array.
const carBrands = [
  { name: 'ford' },
  { name: 'lexus' },
  { name: 'maserati' },
  { name: 'ford' },
];

const contains = (obj, key) => {
  for (const x in obj) {
    if (obj[x].name === key) {
      return true;
    }
    return false;
  }
};

console.log(contains(carBrands, 'ford'));

//  8. Destructure the following object in the given way
const obj = {
  _id: '5bb752fac800bb022cee5abe',
  roles: 'Array',
  Is_active: true,
  name: 'Object',
  password: 'Object',
  created_at: '2020-10-12T05:07:04.509+00:00',
  updated_at: '2020-10-12T05:07:04.946+00:00',
  __v: 0,
};

const { roles, Is_active, name } = obj;

const newObj = {
  roles: roles,
  Is_active: Is_active,
  name: name,
};

console.log(newObj);

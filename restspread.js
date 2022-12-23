const citiesUkraine = ["Kiev", "Dnepr", "Poltava", "Lviv"];
const citiesEurope = ["Берлин", "Прага", "Париж"];

const citiesUkraineWithPopulation = {
  Kiev: 20,
  Dnepr: 8,
  Poltava: 5,
  Lviv: 3,
};

const citiesEuropeWithPopulation = {
  Kiev: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2,
};

// Spread
console.log(...citiesUkraine);
console.log(...citiesEurope);

const allCities = [...citiesEurope, ...citiesUkraine];
// const allCities = citiesEurope.concat(citiesUkraine)
console.log(allCities);

console.log({ ...citiesUkraineWithPopulation });
console.log({ ...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation });
console.log({ ...citiesEuropeWithPopulation, ...citiesUkraineWithPopulation });

/// Practice
const numbers = [5, 37, 42, 17];
console.log(Math.max(5, 37, 42, 17));
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers));

const divs = document.querySelectorAll("div");
const nodes = [...divs];
console.log(divs, Array.isArray(divs));
console.log(nodes, Array.isArray(nodes));

/// Rest
function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(sum(...nums));

// const a = nums[0]
// const b = nums[1]

const [a, b, ...other] = nums;
console.log(a, b, other);

const person = {
  name: "Max",
  age: 20,
  city: "Kiev",
  country: "Ukraine",
};

const { name, age, ...address } = person;

console.log(name, age, address);
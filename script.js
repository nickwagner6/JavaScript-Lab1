const name = "Nick Wagner";
let age = 27;
const birthday = "May 6";
const pineapplePizza = false;

const lifeEvents = [
  "I live in Dearborn Michigan",
  "I have swam with dolphins",
  "I lived in Las Vegas for a year",
  "I hope to be a GC graduate",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and i like pinapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  pineapplePizza;
  console.log(
    `My name is ${name} and im not into pinapples on my pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );

  for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5 === 5. it took ${counter} iterations to randomly generate the number to 5.`
    );
    break;
  }
}

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Breakpoints: right click on element in Elements in Chrome Dev Tools

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '🐰');

// Styled
console.log('%c I am some great text', 'font-size:50px; background: lime; text-shadow: 10px 10px 0 white');

// warning!
console.warn('OH NO 😮');

// Error :|
console.error('Poop! 💩');

// Info
console.info("Good news everyone! You are reading this text in Professor Farnsworth's voice!");

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), "Well ain't that cute... BUT IT'S WRONG!!!");

// clearing
//console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Bunneh');
console.count('Bunneh');
console.count('Bunneh');
console.count('Bunneh');
console.count('Bunneh');
console.count('Snek');
console.count('Bunneh');
console.count('Bunneh');
console.count('Bunneh');
console.count('Snek');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/mstop4')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table
console.table(dogs);
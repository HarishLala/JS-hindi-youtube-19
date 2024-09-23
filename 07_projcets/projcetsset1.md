# Projcet Relate to DOM

## Projcet Link
[click Here](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)


#Solution Code 

##Projcet 1
```JavaScript
console.log("harish")
// const buttons = document.querySelectorAll('.button');
// // console.log(buttons);
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id == 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });
//Revision
// const buttons = document.querySelectorAll('.button');
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
    // switch(e.target.id==='grey')
    // case1: body.style.backgroundColor = e.target.id;
    // break;
  });
});
```


##Projcet 2
```JavaScript
const form = document.querySelector('form');
//This usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  const overweight = 24.9;
  const underWeight = 18.6;

  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give A Valid Height${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give A Valid Weight${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi > overweight) {
      bmi = `${bmi} Overweight`;
    } else if (bmi < underWeight) {
      bmi = `${bmi} Underweight`;
    } else if (bmi > underWeight && bmi < overweight) {
      bmi = `${bmi} NormalRange`;
    }
    // if (bmi < 18.6 || bmi < 0) {
    //   results.innerHTML = `<span>${bmi}, Which Is Under Weight</span>`;
    // } else if (bmi === 18.6 || bmi > 18.6 || bmi < 24.9 || bmi === 24.9) {
    //   results.innerHTML = `<span>${bmi}, Which Is Normal Weight</span>`;
    // } else if (bmi > 24.9) {
    //   results.innerHTML = `<span>${bmi}, Which Is Over Weight do some excries</span>`;
    // }

    //Show the Result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  // results.innerHTML = `${height}`;
});

```
##Projcet 3
```JavaScript
const clock = document.getElementById('clock');
// const clock=document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleDateString());
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

##Projcet 4
```JavaScript
let randomNumber = parseInt(Math.random() * 100 + 1);

const sumbit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  sumbit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  //01 to 100 not accpeted A TO Z Negative value not accpeted
  if (isNaN(guess)) {
    alert('Please Enter A Valid Number');
  } else if (guess < 1) {
    alert('Please Enter A Number More Than 1');
  } else if (guess > 100) {
    alert('Please Enter A Number Less Than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over.Random Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage(`Your Guessed it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number Is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number Is Too High`);
  }
}
function displayGuess(guess) {
  //displayGuess
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```
##Projcet 5
```JavaScript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  
  </div> `;
});
```
##Projcet 6
```JavaScript
//Generate A Random Color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// consle.log(Math.floor(Math.random() * 16));
// console.log(randomColor());
let intervalId;
const startChangeColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangeColor = function () {
  clearInterval(intervalId);
  //FlashOut
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);

```

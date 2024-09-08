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
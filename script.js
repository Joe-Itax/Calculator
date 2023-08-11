/*
{
  calculate;
}
import './calculator';
*/
// TODO: Faire la manipulation du DOM dans ce fichier
const input = document.getElementById('input');

const calcul = document.getElementById('calcul');

const chainePremierOperande = [];

//Fonction qui gère la suppression des éléments dans les screens
const screenReset = () => {
  const reset = document.getElementById('reset');

  reset.addEventListener('click', function () {
    calcul.textContent = '';
    input.value = '';
    chainePremierOperande.length = 0;
  });

  const clear = document.getElementById('clear');

  clear.addEventListener('click', function () {
    input.value = '';
    chainePremierOperande.length = 0;
  });
};
screenReset();

//Bouton +/-
const plusoumoins = document.getElementById('plusoumoins');
plusoumoins.addEventListener('click', function () {
  if (input.value.length >= 1 && !input.value.includes('-')) {
    input.value = '-' + input.value;
  } else {
    input.value = input.value.substr(1);
  }
});
//Foncton pour ajout des valeurs numériques dans l'input
const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    switch (e.target.dataset.value) {
      case '1':
        input.value += '1';
        break;
      case '2':
        input.value += '2';
        break;
      case '3':
        input.value += '3';
        break;
      case '4':
        input.value += '4';
        break;
      case '5':
        input.value += '5';
        break;
      case '6':
        input.value += '6';
        break;
      case '7':
        input.value += '7';
        break;
      case '8':
        input.value += '8';
        break;
      case '9':
        input.value += '9';
        break;
      case '0':
        if (input.value.length >= 1) {
          input.value += '0';
        }
        break;
      case '.':
        if (input.value.length >= 1 && !input.value.includes('.')) {
          input.value += '.';
        }
        if (input.value.length === 0) {
          input.value += '0.';
        }
        break;
    }
  });
});
//Fonction calcul de pourcentage d'une valeur
const percentage = document.getElementById('percentage');
percentage.addEventListener('click', function (event) {
  event.preventDefault();
  if (input.value.length >= 1) {
    const premierOperande = Number(input.value);
    input.value = '';
    const resultPercentage = premierOperande / 100;
    input.value = `${resultPercentage}`;
    calcul.textContent = `${premierOperande} % = `;
  }
});

//Fonction addition
let premierOperande = 0;
let inputValue = Number(input.value);
const dividebyOperator = document.getElementById('divideby');
const multiplicationOperator = document.getElementById('times');
const minusOperator = document.getElementById('minus');
const addOperator = document.getElementById('plus');
const plusOperator1 = function () {
  addOperator.addEventListener('click', function (event) {
    event.preventDefault();
    calcul.textContent = '';
    // Ajouter la valeur actuelle de l'input à premierOperande
    premierOperande = 0;
    premierOperande += Number(input.value);
    const lastValue = chainePremierOperande.pop();
    if (input.value.length >= 1) {
      chainePremierOperande.push(input.value + '+');
    }
    if (lastValue === '+') {
      chainePremierOperande.push(input.value);
    } else {
      chainePremierOperande.push(lastValue);
    }
    calcul.textContent = chainePremierOperande.join('');
    input.value = '';
  });
  return addOperator.value;
};
plusOperator1();
// console.log(plusOperator1());

//Fonction calcul ==> premierOperande + operator + deuxièmeOperande = resultat
const equals = document.getElementById('equals');
equals.addEventListener('click', function (event) {
  event.preventDefault();
  if (input.value.length >= 1) {
    chainePremierOperande.push(input.value);
    calcul.textContent = chainePremierOperande.join(' ') + ' =';
    let deuxiemeOperande = Number(input.value);
    const result = premierOperande + deuxiemeOperande;
    input.value = `${result}`;
    premierOperande = 0;
    deuxiemeOperande = 0;
  }
});

minusOperator.addEventListener('click', function (event) {
  event.preventDefault();
  calcul.textContent = '';
  // Ajouter la valeur actuelle de l'input à premierOperande
  premierOperande = 0;
  premierOperande -= Number(input.value);
  const lastValue = chainePremierOperande.pop();
  if (input.value.length >= 1) {
    chainePremierOperande.push(input.value + '-');
  }
  if (lastValue === '-') {
    chainePremierOperande.push(input.value);
  } else {
    chainePremierOperande.push(lastValue);
  }
  calcul.textContent = chainePremierOperande.join('');
  input.value = '';
});
/*
const equals = document.getElementById('equals');
equals.addEventListener('click', function (event) {
  event.preventDefault();
  premierOperande = plusOperator1();
  const deuxiemeOperande = Number(input.value);
  const result = premierOperande + deuxiemeOperande;
  input.value = `${result}`;
  calcul.textContent = `${premierOperande} + ${deuxiemeOperande} = `;
});
/*
// Fonction addition
let premierOperande = 0;
let inputValue = Number(input.value);
let chainePremierOperande = [];
// let operator = ['/', '*'];
const addOperator1 = function () {
  const addOperator = document.getElementById('plus');
  addOperator.addEventListener('click', function (event) {
    event.preventDefault();
    for (let i = 0; i < chainePremierOperande.length; i++) {
      inputValue += chainePremierOperande[i];
    }
    premierOperande = Number(input.value);
    chainePremierOperande.push(premierOperande + '+');
    input.value = '';
    calcul.textContent = `${chainePremierOperande.join('').toString()} `;
  });
  return Number(addOperator.dataset.value);
};

addOperator1();
//Fonction calcul ==> premierOperande + operator + deuxièmeOperande = resultat
const equals = document.getElementById('equals');
equals.addEventListener('click', function (event) {
  event.preventDefault();
  const deuxiemeOperande = Number(input.value);
  const result = Number(calcul.textContent) + deuxiemeOperande;
  input.value = `${result}`;
  calcul.textContent = `${premierOperande} + ${deuxiemeOperande} = `;
});
*/

/*

const input = document.getElementById('input');

const calcul = document.getElementById('calcul');

const chainePremierOperande = [];

//Fonction qui gère la suppression des éléments dans les screens
const screenReset = () => {
  const reset = document.getElementById('reset');

  reset.addEventListener('click', function () {
    calcul.textContent = '';
    chainePremierOperande.length = 0;
  });

  const clear = document.getElementById('clear');

  clear.addEventListener('click', function () {
    input.value = '';
    chainePremierOperande.length = 0;
  });
};
screenReset();

//Bouton +/-
const plusoumoins = document.getElementById('plusoumoins');
plusoumoins.addEventListener('click', function () {
  if (input.value.length >= 1 && !input.value.includes('-')) {
    input.value = '-' + input.value;
  } else {
    input.value = input.value.substr(1);
  }
});
const btnDigit = document.querySelectorAll('.numpad');

btnDigit.forEach((digit) => {
  digit.addEventListener('click', function () {
    switch (digit.innerHTML) {
      case '1':
        input.value += '1';
        break;
      case '2':
        input.value += '2';
        break;
      case '3':
        input.value += '3';
        break;
      case '4':
        input.value += '4';
        break;
      case '5':
        input.value += '5';
        break;
      case '6':
        input.value += '6';
        break;
      case '7':
        input.value += '7';
        break;
      case '8':
        input.value += '8';
        break;
      case '9':
        input.value += '9';
        break;
      case '0':
        if (input.value.length >= 1) {
          input.value += '0';
        }
        break;
      case '.':
        if (input.value.length >= 1 && !input.value.includes('.')) {
          input.value += '.';
        }
        if (input.value.length === 0) {
          input.value += '0.';
        }
        break;
    }
  });
});

//Fonction calcul de pourcentage d'une valeur
const percentage = document.getElementById('percentage');
percentage.addEventListener('click', function (event) {
  event.preventDefault();
  const premierOperande = Number(input.value);
  input.value = '';
  const resultPercentage = premierOperande / 100;
  input.value = `${resultPercentage}`;
  calcul.textContent = `${premierOperande} % = `;
});

//Fonction addition
let premierOperande = 0;
let inputValue = Number(input.value);
const plusOperator1 = function () {
  const addOperator = document.getElementById('plus');
  addOperator.addEventListener('click', function (event) {
    event.preventDefault();
    calcul.textContent = '';
    // Ajouter la valeur actuelle de l'input à premierOperande
    premierOperande += Number(input.value);
    if (chainePremierOperande.slice(-1) !== '+') {
      chainePremierOperande.push(input.value + '+');
    }
    calcul.textContent = chainePremierOperande.join('');
    input.value = '';
  });
  return addOperator.value;
};
plusOperator1();
// console.log(plusOperator1());

//Fonction calcul ==> premierOperande + operator + deuxièmeOperande = resultat
const equals = document.getElementById('equals');
equals.addEventListener('click', function (event) {
  event.preventDefault();
  chainePremierOperande.push(input.value);
  calcul.textContent = chainePremierOperande.join(' ') + ' =';
  let deuxiemeOperande = Number(input.value);
  const result = premierOperande + deuxiemeOperande;
  input.value = `${result}`;
  premierOperande = 0;
  deuxiemeOperande = 0;
});



1.J'ai posé cette condition:
"if (chainePremierOperande.slice(-1) !== '+') {
  chainePremierOperande.push(input.value + '+');
}"pour que ça puisse vérifier la dernière valeur du tableau, et que si la dernière valeur du tableau est différent du symbol "+" que ça puisse l'ajouter, mais la condition ne marche pas. 
2. Quand je click sur le bouton égale, le résultat apparait bien comme je veux, le problème survient lorsque je veux rélancer une autre opération à partir du résultat qui se trouve déjà dans l'input, mais ça concatene la dernière valeur du tableau puis rajoute le symbole "+", comment regler ce problème?
*/

/*
const input = document.getElementById('input');

const calcul = document.getElementById('calcul');

const chainePremierOperande = [];

//Fonction qui gère la suppression des éléments dans les screens
const screenReset = () => {
  const reset = document.getElementById('reset');

  reset.addEventListener('click', function () {
    calcul.textContent = '';
    input.value = '';
    chainePremierOperande.length = 0;
  });

  const clear = document.getElementById('clear');

  clear.addEventListener('click', function () {
    input.value = '';
    chainePremierOperande.length = 0;
  });
};
screenReset();

//Bouton +/-
const plusoumoins = document.getElementById('plusoumoins');
plusoumoins.addEventListener('click', function () {
  if (input.value.length >= 1 && !input.value.includes('-')) {
    input.value = '-' + input.value;
  } else {
    input.value = input.value.substr(1);
  }
});
//Foncton pour ajout des valeurs numériques dans l'input
const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    switch (e.target.dataset.value) {
      case '1':
        input.value += '1';
        break;
      case '2':
        input.value += '2';
        break;
      case '3':
        input.value += '3';
        break;
      case '4':
        input.value += '4';
        break;
      case '5':
        input.value += '5';
        break;
      case '6':
        input.value += '6';
        break;
      case '7':
        input.value += '7';
        break;
      case '8':
        input.value += '8';
        break;
      case '9':
        input.value += '9';
        break;
      case '0':
        if (input.value.length >= 1) {
          input.value += '0';
        }
        break;
      case '.':
        if (input.value.length >= 1 && !input.value.includes('.')) {
          input.value += '.';
        }
        if (input.value.length === 0) {
          input.value += '0.';
        }
        break;
    }
  });
});
//Fonction calcul de pourcentage d'une valeur
const percentage = document.getElementById('percentage');
percentage.addEventListener('click', function (event) {
  event.preventDefault();
  if (input.value.length >= 1) {
    const premierOperande = Number(input.value);
    input.value = '';
    const resultPercentage = premierOperande / 100;
    input.value = `${resultPercentage}`;
    calcul.textContent = `${premierOperande} % = `;
  }
});

//Fonction addition
let premierOperande = 0;
let inputValue = Number(input.value);
const dividebyOperator = document.getElementById('divideby');
const multiplicationOperator = document.getElementById('times');
const minusOperator = document.getElementById('minus');
const addOperator = document.getElementById('plus');
const plusOperator1 = function () {
  addOperator.addEventListener('click', function (event) {
    event.preventDefault();
    calcul.textContent = '';
    // Ajouter la valeur actuelle de l'input à premierOperande
    premierOperande = 0;
    premierOperande += Number(input.value);
    const lastValue = chainePremierOperande.pop();
    if (input.value.length >= 1) {
      chainePremierOperande.push(input.value + '+');
    }
    if (lastValue === '+') {
      chainePremierOperande.push(input.value);
    } else {
      chainePremierOperande.push(lastValue);
    }
    calcul.textContent = chainePremierOperande.join('');
    input.value = '';
  });
  return addOperator.value;
};
plusOperator1();
// console.log(plusOperator1());

//Fonction calcul ==> premierOperande + operator + deuxièmeOperande = resultat
const equals = document.getElementById('equals');
equals.addEventListener('click', function (event) {
  event.preventDefault();
  if (input.value.length >= 1) {
    chainePremierOperande.push(input.value);
    calcul.textContent = chainePremierOperande.join(' ') + ' =';
    let deuxiemeOperande = Number(input.value);
    const result = premierOperande + deuxiemeOperande;
    input.value = `${result}`;
    premierOperande = 0;
    deuxiemeOperande = 0;
  }
});
"Corrige les erreurs de logique et developpe les parties manquants, comme les autres opérations"
*/

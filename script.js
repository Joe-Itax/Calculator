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
const btns = document.querySelectorAll('.numpad');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    switch (btn.innerText) {
      case '1':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '1')
          : (input.value += '1');
        break;
      case '2':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '2')
          : (input.value += '2');
        break;
      case '3':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '3')
          : (input.value += '3');
        break;
      case '4':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '4')
          : (input.value += '4');
        break;
      case '5':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '5')
          : (input.value += '5');
        break;
      case '6':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '6')
          : (input.value += '6');
        break;
      case '7':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '7')
          : (input.value += '7');
        break;
      case '8':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '8')
          : (input.value += '8');
        break;
      case '9':
        input.value.indexOf('0') === 0 && input.value[1] !== '.'
          ? (input.value = '9')
          : (input.value += '9');
        break;
      case '0':
        if (input.value.length === 0) {
          input.value = '0';
        } else if (input.value.length >= 1 && input.value !== '0') {
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
//***************************** */
//Les operateurs
const dividebyOperator = document.getElementById('divideby');
const multiplicationOperator = document.getElementById('times');
const minusOperator = document.getElementById('minus');
const addOperator = document.getElementById('plus');

//Fonction addition
const plusOperator1 = function () {
  addOperator.addEventListener('click', function (event) {
    event.preventDefault();
    calcul.textContent = '';
    const lastValue = chainePremierOperande.pop();
    if (input.value.length >= 1) {
      chainePremierOperande.push(input.value);
      chainePremierOperande.push(' + ');
    }
    if (lastValue === ' + ') {
      chainePremierOperande.push(input.value);
    } else {
      chainePremierOperande.push(lastValue);
    }
    calcul.textContent = chainePremierOperande.join('');
    input.value = '';
  });
};

plusOperator1();

// Fonction soustraction
const minusOperator1 = function () {
  minusOperator.addEventListener('click', function (event) {
    event.preventDefault();
    calcul.textContent = '';
    const lastValue = chainePremierOperande.pop();
    if (input.value.length >= 1 /*&& typeof input.value === 'number'*/) {
      chainePremierOperande.push(input.value);
      chainePremierOperande.push(' - ');
    }
    if (lastValue === ' - ') {
      chainePremierOperande.push(input.value);
    } else {
      chainePremierOperande.push(lastValue);
    }
    calcul.textContent = chainePremierOperande.join('');

    input.value = '';
    /*if (input.value === '-') {
      chainePremierOperande.pop();
      calcul.textContent.length = 0;
    } else*/ if (input.value === '' && calcul.textContent === '') {
      input.value = '-';
    }
  });
};

minusOperator1();

// Fonction multiplication
const multiplicationOperator1 = function () {
  multiplicationOperator.addEventListener('click', function (event) {
    event.preventDefault();
    calcul.textContent = '';
    const lastValue = chainePremierOperande.pop();
    if (input.value.length >= 1) {
      chainePremierOperande.push(input.value);
      chainePremierOperande.push(' x ');
    }
    if (lastValue === ' * ') {
      chainePremierOperande.push(input.value);
    } else {
      chainePremierOperande.push(lastValue);
    }
    calcul.textContent = chainePremierOperande.join('');
    input.value = '';
  });
};

multiplicationOperator1();

// Fonction division
const dividebyOperator1 = function () {
  dividebyOperator.addEventListener('click', function (event) {
    event.preventDefault();
    calcul.textContent = '';
    const lastValue = chainePremierOperande.pop();
    if (input.value.length >= 1) {
      chainePremierOperande.push(input.value);
      chainePremierOperande.push(' ÷ ');
    }
    if (lastValue === ' ÷ ') {
      chainePremierOperande.push(input.value);
    } else {
      chainePremierOperande.push(lastValue);
    }
    calcul.textContent = chainePremierOperande.join('');
    input.value = '';
  });
};

dividebyOperator1();

const equals = document.getElementById('equals');
equals.addEventListener('click', function (event) {
  event.preventDefault();
  if (input.value.length >= 1) {
    chainePremierOperande.push(input.value);
    calcul.textContent = chainePremierOperande.join(' ') + ' =';
    let resultFinal = chainePremierOperande.join('');
    resultFinal = resultFinal.replace('x', '*');
    resultFinal = resultFinal.replace('÷', '/');
    console.log(resultFinal);
    let result = eval(resultFinal);
    input.value = result;
    chainePremierOperande.length = 0;
  }
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
    calcul.textContent = ``;
  }
});

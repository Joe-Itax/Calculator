/*
{
  calculate;
}
import './calculator';
*/
// TODO: Faire la manipulation du DOM dans ce fichier
const input = document.getElementById('input');

const calcul = document.getElementById('calcul');

//Fonction qui gère la suppression des éléments dans les screens
const screenReset = () => {
  const reset = document.getElementById('reset');

  reset.addEventListener('click', function () {
    calcul.textContent = '';
  });

  const clear = document.getElementById('clear');

  clear.addEventListener('click', function () {
    input.value = '';
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
const btnDigit = document.querySelectorAll('.numpad');

btnDigit.forEach((digit) => {
  digit.addEventListener('click', function () {
    if (calcul.textContent !== '') {
      input.value = '';
      calcul.textContent = '';
    }
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

// Fonction addition
let premierOperande = 0;
const addOperator1 = function () {
  const addOperator = document.getElementById('plus');
  addOperator.addEventListener('click', function (event) {
    event.preventDefault();
    premierOperande = Number(input.value);
    input.value = '';
    calcul.textContent = `${premierOperande} + `;
    return premierOperande;
  });
  return Number(addOperator.dataset.value);
};

addOperator1();
//Fonction calcul ==> premierOperande + deuxièmeOperande = resultat
const equals = document.getElementById('equals');
equals.addEventListener('click', function (event) {
  event.preventDefault();
  const deuxiemeOperande = Number(input.value);
  const result = premierOperande + deuxiemeOperande;
  input.value = `${result}`;
  calcul.textContent = `${premierOperande} + ${deuxiemeOperande} = `;
});

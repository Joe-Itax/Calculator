 # Instructions

## Screens
* The bottom input (*can be selected with id value* `input`) holds the current input number.
* The upper label (*can be selected with id value* `calcul`) holds the current computation string as the user types. Operators are preceeded and followed by a single space.
* A number is added to the label after pressing an operator.
* Le calcul ne se fait que quand on apuie sur `=`ou `%`. `
* For example, the computation `23 × 2 = 46`, will have `2` in the input and the string `23 × 2` in the text above the input field.

## Buttons
Buttons are the ***ONLY WAY*** to input data and work as they do in a physical calculator as follows:
- Pressing the numpad adds the digit on the input value
- The dot `.` can be in a string only once and can only follow a digit
- Zero cannot be repeated at the beginning of a number eg. `0000` is not valid input value
- Pressing the `+/-` buttong changes the sign of the current input number
- Pressing the `%` button returns the calculations result as a percentage. i.e. divides it a 100.
- `AC` resets everything, and `C` clears the input alone.
- When displaying the result of an operation, an equal sign `=` is added to the input string and the results is diplayed in the input field.

## Bonus
- Ajouter un bouton `00` qui ajoute deux zéros à l'entrée de l'utilisateur
- Ajouter un historique de calcul.
- Ajouter à l'historique la possibilité de recouvrir un calcul passé. Le calcul fait dans l'input secondaire, le resultat dans l'input primaire.
- Enlever le curseur qui ***clignote*** dans l'input.
- Ajouter une section des boutons pour les constantes `π`, `e`, etc.
- Ajouter une section des boutons pour les fonctions: `exp`, `ln`, trigonometriques, etc.
- Ajouter la possibilite de calcul recursif c-à-d reprendre la derniere operation ou le premier operand est la reponse du calcul precedent. Par exemple faire `3 x 2` nous donne `6` comme reponse. En appuyant de nouveau sur `=` on fait cette fois-ci `6 x 2` puis `12 x 2`, etc.
// Import stylesheets
import "./style.css";

// Recentemente, me deparei várias vezes em cortar uma palavra pelo segundo ou terceiro
// elemento string repetido. Nesse código encontrei a solução.
const appDiv = document.getElementById("app");

/**
 * Permite que o índice de um elemento repetido seja o limite para cortar uma palavra.
 * Os valores repetidos são guardados em um array, então o acesso a seu valor é semelhante ao um array, iniciando com zero.
 * Ex: 'desenvolvedor' Essa palavra tem 2 letras 'v', se for informado 0, ele cortará pelo primeiro 'v' retornando: 'desen', caso informado 1, ele cortará pelo segundo 'v' retornando: desenvol
 * @param value Um valor de string
 * @param searchValue elemento da string que se repete.
 * @param indexPos Posição do elemento repetido, acesso do valor semelhante a um array.
 */

const resultButton = document.getElementById("result-button");
var inputSearchValue = document.getElementById("input-name");
var inputLetter = document.getElementById("input-letter");
var inputIndexPosition = document.getElementById("input-position-letter");
var iDInputElements = [inputSearchValue, inputLetter, inputIndexPosition]

inputSearchValue.focus();

function validInput(){
  const iDInputElements = [inputSearchValue.value, inputLetter.value, inputIndexPosition.value]
  const valid = iDInputElements.includes("")
  if(valid) return alert('Campo(s) ainda vazio(s)');
}

function sliceWordByElement(value, searchValue, indexPosition) {
  let stringChanged = [];

  Array.from(value).forEach((value, index) => {
    if (value == searchValue) {
      stringChanged.push(index);
    }
  });

  const newString = value.substring(0, stringChanged[indexPosition]);
  return newString;
}

resultButton.onclick = function() {
  validInput();
  const value = inputSearchValue.value.toLowerCase();
  const letter = inputLetter.value;
  const position = parseInt(inputIndexPosition.value);
  return appDiv.innerHTML = sliceWordByElement(value, letter, position);
};

var buttonReset = document.getElementById("btn-reset");
buttonReset.onclick = function() {  

  for(let elementId of iDInputElements){
    elementId.value = ""
  }
  appDiv.innerHTML = ""

};

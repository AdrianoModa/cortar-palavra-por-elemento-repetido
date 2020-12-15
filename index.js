// Import stylesheets
import './style.css';

// Melhoramento
const appDiv = document.getElementById('app');

const value = "desenvolvedor".toLowerCase();
const searchValue = "v";
const indexPos = 0;
appDiv.innerHTML = sliceWordByElement(value, searchValue, indexPos);

/**
 * Permite que o índice de um elemento repetido seja o limite para cortar uma palavra.
 * Os valores repetidos são guardados em um array, então o acesso a seu valor é semelhante ao um array, iniciando com zero. 
 * Ex: 'desenvolvedor' Essa palavra tem 2 letras 'v', se for informado 0, ele cortará pelo primeiro 'v' retornando: 'desen', caso informado 1, ele cortará pelo segundo 'v' retornando: desenvol
 * @param value Um valor de string
 * @param searchValue elemento da string que se repete.
 * @param indexPos Posição do elemento repetido, acesso do valor semelhante a um array.
 */
function sliceWordByElement(value, searchValue, indexPosition) {
  let palavraAlterada = [];
  
  Array.from(value).forEach((value, index) => {
    if (value == searchValue) {
      palavraAlterada.push(index);
    }
  });

  const novaPalavra = value.substring(0, palavraAlterada[indexPosition]);
  return novaPalavra;
}
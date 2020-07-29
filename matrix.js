const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const symbols = Array(256).join(1).split('');
const letters = Array(256).join(1).split('');
let m = Math.random;

let symArr = []; // Chineses Characters
let uniArr = []; // Symbols Characters
let uniSymbols = []; // Chinese and Unicode Symbols
let uniSymbolsConverted = []; // Just Numbers for Symbols and Characters
const size = window.screen;
let width = (canvas.width = size.width);
let height = (canvas.height = size.height);

let strSymbols = '';
let strLetters = '';
let mergedSymbols = '';


/***
 * Parte do codigo que gera as letras e simbolos usados no algoritmo da tela do matrix
 */

let matrixCode = [];
console.log('Valor de MatrixCode: ', matrixCode);
let matrixText = []

// for (let i = 33 ; i <= 32000 ; i++) {
//   if(i < 126) {
//     matrixCode.push(i);
//   } else if (i >= 161 && i <= 221) {
//     matrixCode.push(i);
//   } else if(i >= 30000 && i <= 30200) {
//     matrixCode.push(i);
//   }
// }
let i = 0;
for (i = 33 ; i < 126 ; i++) {
  matrixCode.push(i);
}

for (i = 161 ; i <= 221 ; i++) {
  matrixCode.push(i);
}

for (let i = 30000 ; i <= 30200 ; i++) {
  matrixCode.push(i);
}

matrixCode.map(item => {
  if (item <= 221) {
    let letters = String.fromCharCode(48 + m() * 33);
    matrixText.push(letters);
  } else {
    let symbols = String.fromCharCode(3e4 + m() * 33);
    matrixText.push(symbols);
  }
})
/***
 * Parte do codigo que gera as letras e simbolos usados no algoritmo da tela do matrix
 */

// Parte adicional de codigo
symbols.map(() => {
  let res = String.fromCharCode(3e4 + m() * 33);
  strSymbols += String(res);
  symArr.push(res);
});

letters.map(() => {
  let res = String.fromCharCode(48 + m() * 33);
  strLetters += String(res);
  uniArr.push(res);
})


mergedSymbols = strLetters.concat(strSymbols);

let mergedFinal = '';

for (let i = 0; i < mergedSymbols.length; i++) {
  mergedFinal += String(mergedSymbols.charAt(i + '\n'));
}

uniSymbols = symArr.concat(uniArr);

// convert characters and symbols to number
uniSymbols.map((current) => {
  let indice = 0;
  let converted = Number(current.charCodeAt()).toString(10);
  uniSymbolsConverted.push(converted);
  // console.log( 'Valor de uniSymbolsConverted: ', uniSymbolsConverted.map((item, indice, arr) => Number(`${arr[indice]}`)));
  indice++;
});

// Parte adicional de código

const drawMatrix = () => {
	ctx.fillStyle = 'rgba(0, 0, 0, .05)';
	ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#0f0';

  /***
   *  Functional code but with numbers
   */
          // matrixCode.map((mtxCode, index, arr) => {
          //   let xAxis = index * 10;
          //   let letra = arr[index];
          
          //   ctx.fillText(letra, xAxis, mtxCode);

          //   matrixCode[index] = mtxCode > 758 + m() * 1e4 ? 0 : mtxCode + 10;
          // });
  /***
   * Functional code but with numbers
   */
  
  matrixText.map((mtxText, index) => {
    let xAxis = index * 10;
    let yAxis = matrixCode[index];
    let text = '';
    console.log('Valor de yAxis:', yAxis);

    if (yAxis >= 33 && yAxis <= 231) {
      text = String.fromCharCode(48 + m() * 33);
    } else if (yAxis >= 232 && yAxis <= 3300) {
      text = String.fromCharCode(3e4 + m() * 33);
    }
  
    ctx.fillText(text, xAxis, yAxis); // Renderizar para pegar um numero aleatorio para exibir ou letra/numero/pontuação ou caracter chines.

    matrixCode[index] = yAxis > 758 + m() * 1e4 ? 0 : yAxis + 10;
  })
  
}

setInterval(drawMatrix, 60);
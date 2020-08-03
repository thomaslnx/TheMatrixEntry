/**
 * Author: Marcos Moura
 * Author Description: Jr JavaScript, ReactJS and NodeJS Software Engineer
 * Project Description: This is a Matrix Code Rain reproduction where I'm using just pure JavaScript, HTML5, 
 *                      and CSS3. It's been a while that I was intended to code such a project. Done, project
 *                      getting come out from blank paper and get a life. I hope you enjoy it, and if you do,
 *                      consider leaving a star in this project. Despite to looks like a simple project
 *                      taught me some javascript concepts more deeply.
 * Social Networks:
 *                  Linkedin: https://www.linkedin.com/in/marcos-de-moura-silva-06440a186/
 *                  github: https://github.com/thomaslnx
 *                  twitter: https://twitter.com/thomaslnx
 * */

/**
 * Matrix Code Rain Logic
 * */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let m = Math.random;

const size = window.screen;
let width = (canvas.width = size.width);
let height = (canvas.height = size.height);

let matrixCode = [];
let matrixText = [];

for (let i = 0 ; i < 2000 ; i++) {
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

const drawMatrix = () => {
	ctx.fillStyle = 'rgba(0, 0, 0, .05)';
	ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#0f0';
  
  matrixText.map((mtxText, index) => {
    let xAxis = index * 10;
    let yAxis = matrixCode[index];
    let text = '';
    let sym = '';
    let randomText;
    
    if(yAxis && yAxis <= 1500) {
      randomText = (~~(Math.random() * 2)) ? text = String.fromCharCode(48 + m() * 33) : sym = String.fromCharCode(3e4 + m() * 33);
    }

    if (randomText == '') {
      ctx.fillText(text, xAxis, yAxis);
    } else {
      ctx.fillText(randomText, xAxis, yAxis); 
    }

    matrixCode[index] = yAxis > 758 + m() * 1e4 ? 0 : yAxis + 10;
  })
}

/**
 * Matrix Code Rain Logic
 */

// Code Rains Shows Up Logic

const rainCode = document.getElementById('canvas');
const video = document.querySelector('video');

function showsRainCode () {
  rainCode.style.display = 'flex';
  rainCode.style.zIndex = 3;
}

video.addEventListener('ended', (event) => {
  console.log('O video terminou!');
  showsRainCode();
  setInterval(drawMatrix, 60);
});
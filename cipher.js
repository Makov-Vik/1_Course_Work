'use strict';

const text_input = document.getElementById('text_input');
const text_out = document.getElementById('text_out');
const text_unencrypt = document.getElementById('unencrypt');
// const button = document.getElementById('button');

text_out.innerHTML = '';
const characterSpan = document.createElement('span');

text_unencrypt.innerHTML = '';
const characterSpan2 = document.createElement('span');

document.querySelector('button').onclick = click;

function click() {
  const text = text_input.value.split('');
  let key = [];
  let output = new String;
  let out2 = new String;
  for (let i = 0; i < text.length; i += 1) {
    const random = Math.round(Math.random() * 122) + 68;
    text[i] = String.fromCharCode(text[i].charCodeAt(0) + random);
    key[i] = random;
    output += text[i];
  }
  characterSpan.innerText = output;
  text_out.appendChild(characterSpan);

  // Unencrypt
  for (let i = 0; i < text.length; i += 1) {
    text[i] = String.fromCharCode(text[i].charCodeAt(0) - key[i]);
    out2 += text[i];
  }
  characterSpan2.innerText = out2;
  text_unencrypt.appendChild(characterSpan2);
}

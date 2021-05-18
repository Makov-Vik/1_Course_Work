'use strict';

const text_input = document.getElementById('text_input');
const text_out = document.getElementById('text_out');
const text_unencrypt = document.getElementById('unencrypt');

text_out.innerHTML = '';
const characterSpan = document.createElement('span');

text_unencrypt.innerHTML = '';
const characterSpan2 = document.createElement('span');

document.querySelector('button').onclick = encrypt_by_Unicodende;

  // Unencrypt
  // for (let i = 0; i < text.length; i += 1) {
  //   text[i] = String.fromCharCode(text[i].charCodeAt(0) - key[i]);
  //   out2 += text[i];
  // }
  // characterSpan2.innerText = out2;
  // text_unencrypt.appendChild(characterSpan2);

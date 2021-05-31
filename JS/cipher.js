'use strict';

const asymmetricopen = document.getElementById('open_key_field');
const asymmetricprivate = document.getElementById('private_key_field');

// const btn = document.createElement('button');
// btn.id = 'Asymmetrically';
// btn.textContent = 'Asymmetrically';
// document.body.appendChild(btn);
//btn.onclick = asymmetrically;
//document.getElementById("button2").addEventListener("click", EncryptByUnicode);

document.querySelector('button').onclick = EncryptByUnicode;

document.getElementById('asym_cipher').onclick = asymmetricalcipher;

document.getElementById('asym_decryption').onclick = asymmetricaldecryption;

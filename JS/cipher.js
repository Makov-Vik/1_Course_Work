'use strict';

// encryption with Unicode
const encryptByUnicode = () => {
  const textinput = this.document.getElementById('text_input').value.split('');
  const textout = this.document.getElementById('text_out');
  const textunencrypt = this.document.getElementById('unencrypt');
  textout.innerHTML = '';
  const areacipher = this.document.createElement('span');
  textunencrypt.innerHTML = '';
  const areadecryption = this.document.createElement('span');

  const key = [];
  const text = textinput;

  const output = [];
  let unencrypt = [];
  const range = 1001;
  for (let i = 0; i < text.length; i += 1) {
    const random = Math.round(Math.random() * range);
    text[i] = String.fromCharCode(text[i].charCodeAt() + random);
    key[i] = random;
    output.push(text[i]);
  }
  areacipher.innerText = output.join('');
  textout.appendChild(areacipher);

  // unencypt
  for (let i = 0; i < text.length; i += 1) {
    text[i] = String.fromCharCode(output[i].charCodeAt() - key[i]);
    unencrypt += text[i];
  }
  areadecryption.innerText = unencrypt;
  textunencrypt.appendChild(areadecryption);
};

// asymmetric encryption
const asymmetricalCipher = () => {
  // get message, keys, create output element
  const input = this.document.getElementById('text_input').value.split('');
  const openkey = this.document.getElementById('open_key_field').value.split(' ');
  const output = this.document.getElementById('asymmetrical_cipher');
  output.innerHTML = '';
  const areacipher = this.document.createElement('span');

  const outputasymciphet = [];

  // create the first element to obfuscate the message
  const shift = 33;
  const date = BigInt(new Date().getDate() + shift);
  outputasymciphet[0] = date;

  // I assign public key to variables
  const FirstKey = BigInt(openkey[0]);
  const SecondKey = BigInt(openkey[1]);

  for (let i = 0; i < input.length; i += 1) {
    input[i] = input[i].charCodeAt();

    // asymmetric encryption
    outputasymciphet[i + 1] = ((BigInt(input[i]) ** FirstKey) % SecondKey) + date;

    // entanglement
    outputasymciphet[i + 1] = (outputasymciphet[i + 1] + outputasymciphet[i]);
  }
  for (let i = 0; i < input.length + 1; i += 1) {
    outputasymciphet[i] = String.fromCharCode(Number(outputasymciphet[i]));
  }
  outputasymciphet.join('');
  areacipher.innerText = outputasymciphet.join('');
  output.appendChild(areacipher);
};

// asymmetric decryption
const asymmetricalDecryption = () => {
  // get message, keys, create output element
  const input = this.document.getElementById('text_input_decryption').value.split('');
  const privatekey = this.document.getElementById('private_key_field').value.split(' ');
  const output = this.document.getElementById('asymmetrical_decryption');
  output.innerHTML = '';
  const areadecryption = this.document.createElement('span');
  const outputasymdecryption = [];

  // I assign private key to variables
  const FirstKey = BigInt(privatekey[0]);
  const SecondKey = BigInt(privatekey[1]);

  for (let i = 0; i < input.length; i += 1) {
    input[i] = input[i].charCodeAt();
  }

  for (let i = 1; i < input.length; i += 1) {
    // untangling
    outputasymdecryption[i - 1] = (input[i] - input[i - 1]);
  }
  const shift = 33;
  // create the first element to obfuscate the message
  const date = new Date().getDate() + shift;

  for (let i = 0; i < input.length - 1; i += 1) {
    outputasymdecryption[i] -= date;
    outputasymdecryption[i] = (BigInt(outputasymdecryption[i]) ** FirstKey) % SecondKey;
    outputasymdecryption[i] = String.fromCharCode(Number(outputasymdecryption[i]));
  }
  outputasymdecryption.join('');
  areadecryption.innerText = outputasymdecryption.join('');
  output.appendChild(areadecryption);
};

// call functions by button
this.document.querySelector('button').onclick = encryptByUnicode;
this.document.getElementById('asym_cipher').onclick = asymmetricalCipher;
this.document.getElementById('asym_decryption').onclick = asymmetricalDecryption;

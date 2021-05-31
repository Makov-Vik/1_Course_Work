EncryptByUnicode = () => {
  const textinput = this.document.getElementById('text_input').value.split('');
  const textout = this.document.getElementById('text_out');
  const textunencrypt = document.getElementById('unencrypt');
  textout.innerHTML = '';
  const areacipher = document.createElement('span');
  textunencrypt.innerHTML = '';
  const areadecryption = document.createElement('span');

  const key = [];
  const text = textinput;

  let output = [];
  let unencrypt = [];
  for (let i = 0; i < text.length; i += 1) {
    const random = Math.round(Math.random() * 122) + 68;
    text[i] = String.fromCharCode(text[i].charCodeAt(0) + random);
    key[i] = random;
    output += text[i];
  }
  areacipher.innerText = output;
  textout.appendChild(areacipher);

  // unencypt
  for (let i = 0; i < text.length; i += 1) {
    text[i] = String.fromCharCode(output[i].charCodeAt(0) - key[i]);
    unencrypt += text[i];
  }
  areadecryption.innerText = unencrypt;
  textunencrypt.appendChild(areadecryption);
};

asymmetricalcipher = () => {
  const textinput = this.document.getElementById('text_input').value.split('');
  const openkey = this.document.getElementById('open_key_field').value.split(' ');
  const output = this.document.getElementById('asymmetrical_cipher');
  output.innerHTML = '';
  const areacipher = document.createElement('span');

  const outputasymciphet = [];
  outputasymciphet[0] = BigInt(33);
  for (let i = 0; i < textinput.length; i += 1) {
    textinput[i] = textinput[i].charCodeAt(0);
    outputasymciphet[i + 1] = (BigInt(textinput[i]) ** BigInt(openkey[0])) % BigInt(openkey[1]) + BigInt(33);
    outputasymciphet[i + 1] = (outputasymciphet[i + 1] + outputasymciphet[i]);
  }
  for (let i = 0; i < textinput.length + 1; i += 1) {
    outputasymciphet[i] = String.fromCharCode(Number(outputasymciphet[i]));
  }
  outputasymciphet.join('');
  areacipher.innerText = outputasymciphet.join('');
  output.appendChild(areacipher);
};

asymmetricaldecryption = () => {
  const textinput = this.document.getElementById('text_input_decryption').value.split('');
  const privatekey = this.document.getElementById('private_key_field').value.split(' ');
  const output = this.document.getElementById('asymmetrical_decryption');
  output.innerHTML = '';
  const areadecryption = document.createElement('span');
  const outputasymdecryption = [];

  for (let i = 0; i < textinput.length; i += 1) {
    textinput[i] = textinput[i].charCodeAt(0);
  }

  for (let i = 1; i < textinput.length; i += 1) {
    outputasymdecryption[i - 1] = (textinput[i] - textinput[i - 1]);
  }
  for (let i = 0; i < textinput.length - 1; i += 1) {
    outputasymdecryption[i] -= 33;
  }
  for (let i = 0; i < textinput.length - 1; i += 1) {
    outputasymdecryption[i] = (BigInt(outputasymdecryption[i]) ** BigInt(privatekey[0])) % BigInt(privatekey[1]);
  }
  for (let i = 0; i < textinput.length - 1; i += 1) {
    outputasymdecryption[i] = String.fromCharCode(Number(outputasymdecryption[i]));
  }
  outputasymdecryption.join('');
  areadecryption.innerText = outputasymdecryption.join('');
  output.appendChild(areadecryption);
};

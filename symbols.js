
  encrypt_by_Unicodende = (input, out) => {
  const text_input = this.document.getElementById('text_input').value.split('');
  const text_out = this.document.getElementById('text_out');
  text_out.innerHTML = '';
  const characterSpan = document.createElement('span');

  let key = [];
  const text = text_input

  let output = new String;
  for (let i = 0; i < text.length; i += 1) {
    const random = Math.round(Math.random() * 122) + 68;
    text[i] = String.fromCharCode(text[i].charCodeAt(0) + random);
    key[i] = random;
    output += text[i];
  }
  characterSpan.innerText = output;
  text_out.appendChild(characterSpan);
};

//   encrypt_by_Unicodende = () => {
//     console.log('jkh');
//  }

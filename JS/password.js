const a = this.document.getElementById('input');
const b = this.document.getElementById('label');
const c = this.document.getElementById('biba');
const d = this.document.getElementById('button');
const i = this.document.getElementById('mass-password');
const g = this.document.getElementById('biba2');
const k = this.document.getElementById('input2');
const m = this.document.getElementById('button2');

function generator(len, settings) {
  let str = '';
  if (settings.BigChungus) {
    str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (settings.SmallChungus) {
    str += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (settings.Numbers) {
    str += '0123456789';
  }
  if (settings.Symbols) {
    str += 'a!@✝#$%^&*()_+№;:?-=卐';
  }
  let string = '';
  for (let j = 0; i < len; j += 1) {
    string += str[Math.round(Math.random() * (str.length - 1))];
  }
  return string;
}

function porno() {
  const e = this.document.getElementById('A-Z');
  const f = this.document.getElementById('a-z');
  const j = this.document.getElementById('0-9');
  const h = this.document.getElementById('symbols');
  const hui = {
    BigChungus: e.checked,
    SmallChungus: f.checked,
    Numbers: j.checked,
    Symbols: h.checked,
  };
  b.value = generator(a.value, hui);
  function amountgenerator(len) {
    let res = '';
    if (len <= 1) {
      i.style.display = 'none';
      m.style.display = 'none';
    }
    if (len > 1) {
      m.style.display = '';
      i.style.display = '';
      for (let index = 0; i < len; index += 1) {
        res += `${generator(a.value, hui)}\n`;
      }
    }
    return res;
  }
  i.textContent = amountgenerator(k.value);
  c.textContent = a.value;
  g.textContent = k.value;
}

function copying() {
  const copyText = this.document.getElementById('label');
  copyText.select();
  this.document.execCommand('copy');
  alert(`Copied the text: ${copyText.value}`);
}
function copying2() {
  const copyText = this.document.getElementById('mass-password');
  copyText.select();
  this.document.execCommand('copy');
  alert(`Copied the text: ${copyText.value}`);
}

console.dir(i);
a.addEventListener('input', porno);
d.addEventListener('click', porno);
b.addEventListener('click', copying);
porno();
k.addEventListener('input', porno);
m.addEventListener('click', copying2);

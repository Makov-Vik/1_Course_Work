const a = document.getElementById("input");
const b = document.getElementById("label");
const c = document.getElementById("biba");
const d = document.getElementById("button");
const i = document.getElementById("mass-password");
const g = document.getElementById("biba2");
const k = document.getElementById("input2");
const m = document.getElementById("button2");
console.dir(i)
a.addEventListener("input", porno);
d.addEventListener("click",porno);
b.addEventListener("click",copying);
porno();
k.addEventListener("input", porno);
m.addEventListener("click", copying2);

function generator(len, settings){
    let str = "";
    if (settings.BigChungus){
        str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (settings.SmallChungus){
        str += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (settings.Numbers){
        str += '0123456789';
    }
    if (settings.Symbols){
        str += 'a!@✝#$%^&*()_+№;:?-=卐';
    }
    let string = '';
    for(let i = 0; i < len; i++){
        string += str[Math.round(Math.random() * (str.length - 1))];
    }
    return string;
}


function porno(){
    const e = document.getElementById("A-Z");
    const f = document.getElementById("a-z");
    const j = document.getElementById("0-9");
    const h = document.getElementById("symbols");
    let hui = {
        BigChungus: e.checked,
        SmallChungus: f.checked,
        Numbers: j.checked,
        Symbols: h.checked
    }
    b.value = generator(a.value, hui);
    function amountgenerator(len){
        let res = "";
        if(len <= 1){
            i.style.display = "none";
            m.style.display = "none";
        }
        if(len > 1){
            m.style.display = "";
            i.style.display = "";
            for(let i = 0; i < len; i++){
                res += generator(a.value, hui) + "\n" ;
            }
        }
        return res;
    }
    i.textContent = amountgenerator(k.value);
    c.textContent = a.value;
    g.textContent = k.value;
}

function copying() {
    let copyText = document.getElementById("label");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
function copying2() {
    let copyText = document.getElementById("mass-password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

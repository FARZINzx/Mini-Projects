const btnGenerator = document.getElementById("generate-pass");
const lengthTag = document.getElementById("lenth");
const uppercaseTag = document.getElementById("uppercase");
const lowercaseTag = document.getElementById("lowercase");
const NumbersTag = document.getElementById("Numbers");
const symbolsTag = document.getElementById("symbols");
const resultTag = document.getElementById("result-span");

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbols() {
  const symbols = [
    "!",
    "@",
    "$",
    "%",
    "~",
    "#",
    "^",
    "&",
    "{",
    "}",
    "<",
    ">",
    "=",
    "/",
  ];
  const getRandomNum = Math.floor(Math.random() * symbols.length);
  return symbols[getRandomNum];
}

const randFunc = {
  lower: getRandomLowercase,
  upper: getRandomUppercase,
  symbols: getSymbols,
  number: getRandomNumber,
};

btnGenerator.addEventListener("click", () => {
  let hasLenth = +lengthTag.value;
  let hasUpper =  uppercaseTag.checked;
  let haslower =  lowercaseTag.checked;
  let hasnumber = NumbersTag.checked;
  let hasymbol =  symbolsTag.checked;

  resultTag.innerHTML = generatePassWord(hasLenth , hasUpper , haslower ,hasnumber , hasymbol)
});


const generatePassWord = (lenth , upper , lower , number , symbol) => {
     let generatedPassword = " "
     const typeChecked = lower + upper + number + symbol
     const typesArr = [{lower} , {upper} , {number} , {symbol}].filter(item=>Object.values(item)[0])
     console.log(typesArr)

     if(typesArr === 0){
          return ''; 
     }
}


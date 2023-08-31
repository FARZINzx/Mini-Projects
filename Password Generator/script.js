function getRandomLowercase(){
     return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUppercase(){
     return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
     return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getSymbols(){
     const symbols = ['!','@','$','%','~','#','^','&','{','}','<','>','=','/']
     const getRandomNum = Math.floor(Math.random()*symbols.length)
     return symbols[getRandomNum]
     
}

const randFunc = {
     lower :  getRandomLowercase,
     upper :  getRandomUppercase,
     symbols : getSymbols,
     number : getRandomNumber 
}


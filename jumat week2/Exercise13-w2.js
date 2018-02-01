// Exercise 13 week 2 X dan O
// Tes Push Pull habis Install ulang ubuntu
function xo(str){
  var x = str.match(/x/g).length;
  var o = str.match(/o/g).length;
  
  if (x == o){
    return true;
  }else {
    return false;
  }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));

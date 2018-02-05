// Exercise 13 week 2 X dan O

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

//Tanpa menggunakan match function
function xo2(str) {
  var x = 0;
  var o = 0;
  var kurang = 1;
  var hasil ='';
  for(var i = str.length; i >0 ; i--){
    hasil = str[str.length - kurang];
    if (hasil == 'x'){
      x += 1;
    }else{
      o += 1;
    }
    kurang++;
    //console.log(hasil);
  }
  return x === o;
}

// TEST CASES
console.log(xo2('xoxoxo')); // true
console.log(xo2('oxooxo')); // false
console.log(xo2('oxo')); // false
console.log(xo2('xxxooo')); // true
console.log(xo2('xoxooxxo')); // true

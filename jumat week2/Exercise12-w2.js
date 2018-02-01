//Exercise 12 minggu ke 2 'Konversi Menit'

function konversiMenit(menit){
  var jam = Math.floor(menit / 60); 
  var min = menit % 60;
  var hasilMin ;
  if(min <= 10){
    hasilMin = '0'+min;
  }else{
    hasilMin = min;
  }
  return jam+':'+hasilMin;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));

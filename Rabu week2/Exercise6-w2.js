// LOOPING
// 1. Melakukan Looping Menggunakan WWhile

var num = 2;

console.log('SOAL NOMOR 1: \nLOOPING PERTAMA');
while(num <= 20){
  console.log(num+' - I love coding');
  num += 2;
}

console.log('LOOPING KEDUA');
while(num > 2){
  num -= 2;
  console.log(num+' - I will become fullstack developer');
}
console.log('--------------------------\n');

// 2. Melakukan Looping Menggunakan for

console.log('SOAL NOMOR 2: \nLOOPING PERTAMA');
for(var num2 = 1; num2 <= 20; num2++){
  console.log(num2+' - I love coding');
}

console.log('LOOPING KEDUA');
for(num2 -= 1; num2 > 0; num2--){
  console.log(num2+' - I will become fullstack developer');
}
console.log('--------------------------\n');


// 3. Angka Ganjil dan Genap

var counter = 1;
console.log('SOAL NOMOR 3: \nUntuk GANJIL - GENAP:');

while(counter >= 1 && counter <= 100){
  console.log('counter sekarang = '+counter);
  
  if(counter%2 === 0){
    console.log('GENAP');
  }else {
    console.log('GANJIL');
  }
  
  counter++ ;
}
console.log('************************\n');

// Untuk Pertambahan counter 2
var counter2 = 1;
console.log('SOAL NOMOR 3: \nUntuk Pertambahan counter 2:');

while(counter2 >=1 && counter2 <= 100){
  console.log('counter sekarang = '+counter2);
  
  if(counter2%3 === 0){
    console.log(counter2+' KELIPATAN 3');
  }else{
    console.log(' ');
  }
  
  counter2 += 2 ;
}
console.log('************************\n');

// Untuk Pertambahan counter 5
var counter5 = 1;
console.log('SOAL NOMOR 3: \nUntuk Pertambahan counter 5:');

while(counter5 >=1 && counter5 <= 100){
  console.log('conuter sekarang = '+counter5);
  
  if(counter5 % 6 === 0){
    console.log(counter5+' KELIPATAN 6');
  }else{
    console.log(' ');
  }
  counter5 += 5;
}
console.log('************************\n');

// Untuk Pertambahan counter 9
var counter9 = 1;
console.log('SOAL NOMOR 3: \nUntuk Pertambahan counter 9:');

while(counter9 >= 1 && counter9 <= 100){
  console.log('counter sekarang = '+counter9);
  
  if(counter9 % 10 === 0){
    console.log(counter9+' KELIPATAN 10');
  }else{
    console.log(' ');
  }
  
  counter9 += 9;
}
























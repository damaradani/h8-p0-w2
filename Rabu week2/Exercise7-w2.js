// EXERCISE 7 week 2 
// 1. Menyusun Barisan Bintang

console.log('Tugas Exercise 7 No.1:');
for(var rows1 = 5; rows1 > 0; rows1--){
  console.log('*');
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('Tugas Exercise 7 No.2');
var star = '*';
var rows2 = 5;
while(rows2 > 0){
  while(star.length < rows2){
    star += '*';
    star.length ++;
  }
  console.log(star);
  rows2--;
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('Tugas Exercise 7 No.3');
var star ='*';
var starow = star.length;
var rows3 = 5;

for(starow; starow <= rows3; starow++){
    console.log(star);
    star +="*";
}

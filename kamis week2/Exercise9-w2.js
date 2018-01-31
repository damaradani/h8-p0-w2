// Exercise 9 Berlatih Penggunaan Functions
// Tugas 1
function shoutOut(){
  return 'Halo Function!';
}

console.log('Tugas 1: \n'+shoutOut()+'\n');


// Tugas 2
function calculateMultiply(num1,num2){
  return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log('Tugas 2:\n'+ hasilPerkalian+'\n');


// Tugas 3
function processSentence(Name,Age,Address,Hobby){
  return 'Nama saya '+Name+', umur saya '+Age+' tahun, alamat saya di '+Address+', dan saya punya hobby yaitu '+hobby+'!';
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log('Tugas 3:\n'+fullSentence);



// Exercise 11 Balik Kata
function balikKata(kata){
var KataL = kata.length;
var buatKurang = 1;
var hasilKata = "";

  for (KataL; KataL > 0;KataL--){
    var kata2 = kata[kata.length - buatKurang];
    hasilKata = hasilKata.concat(kata2);
    buatKurang++;
  }

return hasilKata;
}

console.log(balikKata('Hello world and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('super'));


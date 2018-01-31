var hari = 21; // masukan nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // masukan nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // masukan nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan){
  case 1:
    bulan = "Januari";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 2:
    bulan = "Februari";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 3:
    bulan = "Maret";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 4:
    bulan = "April";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 5:
    bulan = "Mei";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 6:
    bulan = "Juni";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 7:
    bulan = "Juli";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 8:
    bulan = "Agustus";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 9:
    bulan = "September";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 10:
    bulan = "Oktober";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 11:
    bulan = "November";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  case 12:
    bulan = "Desember";
    console.log(hari+" "+bulan+" "+tahun);
    break;
  default:
    console.log("Bulan hanya sampai 12!");
}

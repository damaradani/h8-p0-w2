var nama = "";
var peran = "";

if (peran === "Ksatria" && nama !== ""){
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran, nama+" Kamu dapat menyerang dengan senjatamu!" );
}else if (peran === "Tabib" && nama !== ""){
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran, nama+" Kamu akan membantu temanmu yang terluka." );
}else if(peran === "Penyihir" && nama !== ""){
  console.log("Selamat datang di Dunia Proxytia,"+ nama);
  console.log("Halo "+ peran, nama+" ciptakan keajaiban yang membantu kemenanganmu!" );
}else if(peran === "" && nama !== ""){
  console.log("Halo "+ nama +", Pilih Peranmu untuk memulai game");
}else{
  console.log("Nama harus diisi!");
}


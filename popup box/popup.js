alert("selamat datang..");
let again = true;

while( again === true ) {
  let nama = prompt("masukan nama");
  alert("halo" + " " + nama);

  again = confirm("coba lagi?");
}

alert("TERIMA KASIH");
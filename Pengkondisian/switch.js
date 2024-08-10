var angka = prompt("Masukkan angka / minuman : \n (cnth: nasi, aging, sayur, susu, humberger, cireng, teh kotak)");

switch( angka ) {

  case "nasi":
  case "daging":
  case "sayur":
  case "susu":
    alert("makanan atau minuman ini SEHAT");
    break;
  case "humberger":
  case "cireng":
  case "teh kotak":
    alert("makanan atau minuman ini tidak SEHAT");
    break;

}
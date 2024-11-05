
// Mulai efek mengetik otomatis saat halaman dimuat
window.onload = type;
function hitung() {
    // Ambil nilai input (variable)
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let d = parseFloat(document.getElementById("d").value);
    let t = parseFloat(document.getElementById("tinggi").value);
    
    // Rumus Keliling
    let keliling = a + b + c + d;

    // Rumus Luas
    let luas = ((a + b) * t) / 2;

    

    // Tampilkan hasil]

    // keliling trapesium
    if (keliling >= 500) {
      document.getElementById("keliling").innerText = "Keliling Trapesium: " + keliling + "cm (ukuran besar)";
    }
    else if (keliling< 500 && keliling >= 100) { // true
     document.getElementById("keliling").innerText = "Keliling Trapesium: " +keliling + "cm (ukuran sedang)";
    }
    else { // true
     document.getElementById("keliling").innerText = "Keliling Trapesium: " +keliling + "cm (ukuran kecil)";
    }

    //luas trapesium
    if (luas >= 500) {
      document.getElementById("luas").innerText = "luas Trapesium: " +luas + "cm (ukuran besar)";
    }
    else if (luas< 500 && luas >= 100) { // true
     document.getElementById("luas").innerText = "luas Trapesium: " +luas + "cm (ukuran sedang)";
    }
    else { // true
     document.getElementById("luas").innerText = "luas Trapesium: " +luas + "cm (ukuran kecil)";
    }
}
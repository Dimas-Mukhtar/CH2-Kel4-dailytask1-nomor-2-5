// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

// 1. buat function solution ber parameter x dan y 
function solution(x,y) {
    // tulis jawabanmu disini
    // 2. buat pengkondisian jika x kelipatan 5
    if(x % 5 === 0 ){
        // 3. jika iya, y dikurang x dikurang lagi 0,5, lalu disimpan di variable sisaSaldo
        const sisaSaldo = y - x - 0.5
        // 4. mengembalikan data sisaSaldo
        return sisaSaldo
    } else {
        // 5. jika tidak, mengembalikan data y
        return y
    }
}

console.log(solution(30,20)) // expected output 89.5
console.log(solution(42,100)) // expected output 100

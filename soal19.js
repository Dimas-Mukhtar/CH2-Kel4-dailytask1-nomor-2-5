// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
    // tulis jawabanmu disini
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10);
    }
    return sum;

}
console.log(solution(2022)) // expected output 6
console.log(solution(1001)) // expected output 2

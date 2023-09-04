// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.

// 1. buat function solution berparameter n
function solution(n) {
    // tulis jawabanmu disini
    // 2. buat filter jika n nilainya lebih dari 91
    if(n >= 91){
        // 3. jika iya, maka akan mengembalikan nilai A
        return "A"
        // 4. jika n nilainya lebih dari 81
    } else if(n >= 81){
        // 5. jika iya, maka akan mengembalikan nilai B
        return "B"
        // 6. jika n nilainya lebih dari 71
    } else if(n >= 71){
        // 7. jika iya, maka akan mengembalikan nilai C
        return "C"
        // 8. jika n nilainya lebih dari 61
    } else if(n >= 61){
        // 9. jika iya, maka akan mengembalikan nilai D
        return "D"
        // 10. jika tidak memenuhi yg diatas
    } else {
        // 11. mengembalikan nilai E
        return "E"
    }
}

console.log(solution(95)) // expected output A
console.log(solution(76)) // expected output C
console.log(solution(100))

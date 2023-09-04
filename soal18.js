// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

// 1. buat function solution berparameter str
function solution(str) {
    // tulis jawabanmu disini
    // 2. buat variable result yg nantinya utk menyiman data
    let result = ""
    // 3. looping utk cek semua data 1 1
    for(let i = 0; i < str.length; i++){
        // 4. buat filter jika di data str ada "."
        if(str[i] === "."){
            // 5. push datanya ke result dan "."nya di ganti menjadi "()"
            result += "()"
        // 6. jika tidak ada "."
        } else {
            // 7. maka akan push data seadanya
            result += str[i]
        }
    }
    // 8. mengembalikan data
    return result
}

console.log(solution("1.1.1.1")) // expected output 1()1()1()1()
console.log(solution("192.168.1.1")) // expected output 192()268()1()1()

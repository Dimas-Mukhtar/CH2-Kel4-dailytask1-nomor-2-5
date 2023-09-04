// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

// 1. buat function solution berparameter str
function solution(str) {
    // tulis jawabanmu disini
    // 2. looping cek semua data 1 1
    for (let i = 0; i < str.length; i++) {
        // 3. jika di data str[i] ada "a"
        if (str[i] === 'a') {
            // 4. jika iya, looping semua data 1 1 dimulai dari index i ditambah 4
            for (let j = i + 4; j < str.length; j++) {
                // 5. jika di data str[y] ada "B"
                if (str[j] === 'b') {
                    // 6. mengembalikan "YES"
                    return 'YES';
                }
            }
        }

        // 7. jika di data str[i] ada "b"
        if (str[i] === 'b') {
            // 8. jika iya, looping semua data 1 1 dimulai dari index i ditambah 4
            for (let j = i + 4; j < str.length; j++) {
                // 9. jika di data str[j] ada "A"
                if (str[j] === 'a') {
                    // 10. mengembalikan "YES"
                    return 'YES';
                }
            }
        }
    }

    return 'NO';

}

console.log(solution("acdebae")) // expected output YES
console.log(solution("cdaecba")) // expected output NO

// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

const students = [
    { name: "Peter", score: 30},
    { name: "Parker", score: 50},
    { name: "Harry", score: 70},
    { name: "Eva", score: 79},
    { name: "Justin", score: 60},
    { name: "Bieber", score: 90},
    { name: "Evan", score: 55},
    { name: "Rowling", score: 90}
]

function jalankan(){
    for(let i = 0; i < students.length; i++){
        if(students[i].score < 50){
            console.log(`${students[i].name} tidak lulus, belajar lebih keras lagi! ujian ini anda memperoleh skor ${students[i].score}`)
        } else if(students[i].score > 50 && students[i].score < 70){
            console.log(`${students[i].name} remidial, persiapkan diri anda baik-baik! ujian ini anda memperolah skor ${students[i].score}`)
        } else if(students[i].score > 70){
            console.log(`${students[i].name} lulus, selamat atas kerja keras kamu! pertahankan yaa, ujian ini anda memperolah skor ${students[i].score}`)
        }

    }
}

jalankan(students)
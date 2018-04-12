function fpb(angka1, angka2) {
    if (angka1 === 0)
        return angka2; //kalau angka pertama 0, angka 2 adalah fpb

    while (angka2 !== 0) {
        if (angka1 > angka2)
            angka1 -= angka2; //mengurangi angka 1 dengan angka 2 sampai angka1 === angka2 (common denominator)
        else
            angka2 -= angka1;
    }

    return angka1;

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

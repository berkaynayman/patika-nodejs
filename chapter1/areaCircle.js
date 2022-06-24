function areaCircle(r){
    const result = 3.14 * r * r
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${result}`)
}

areaCircle(process.argv[2])
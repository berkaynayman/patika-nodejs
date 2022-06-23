const arguments = process.argv.slice(2)

function primeNumbers(lowNumber, highNumber){
    for(let i=lowNumber ; i<=highNumber ; i++){
        let isPrime = true
        for(let j=2 ; j<=i/2 ; j++){
            if((i%j === 0) && i !== j ){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(i)
        }
    }
}

// node primeNumber.js 6 12
// primeNumbers(6, 12)
primeNumbers(arguments[0]*1 , arguments[1]*1)
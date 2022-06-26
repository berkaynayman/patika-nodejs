function showPrimeNumbers(lowNumber, highNumber){
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

function sayHello(){
    console.log('hello');
}

/*
module.exports = showPrimeNumbers
module.exports = sayHello
*/

module.exports = {
    showPrimeNumbers,
    sayHello
}
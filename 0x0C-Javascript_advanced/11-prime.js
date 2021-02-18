function countPrimeNumbers(){
    const primeNumbers = [];
    let i = 0;

    for(let number = 2; number <= 100; number++) {
        let prime = true;
        let md = Math.floor(Math.sqrt(number));

        for(let trav = 2; trav <= md; trav++) {
            i++;
            if(number % trav == 0) {
                prime = !prime;
                break;
            }
        }
        if(prime) primeNumbers.push(number);
    }
    return primeNumbers;
}

let start = performance.now();
for(h = 0; h <= 100; h++){
    setTimeout(() => 
        countPrimeNumbers(), 0);
}
let end = performance.now(); 
console.log('Execution time of calculating prime numbers 100 times was', end-start, 'milliseconds');

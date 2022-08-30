// Multiples of 3 or 5

function multiples_of(n){
    let total_sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            total_sum += i;
        }
    }
    console.log(total_sum);
}

multiples_of(10)
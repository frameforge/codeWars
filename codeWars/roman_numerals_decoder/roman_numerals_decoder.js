let what = "IV";
const roman ={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
}


const roman_numerals_decoder=(rm_number)=>{

    let sum = 0;
    
    for (let i = 0; i < rm_number.length; i++) {
        const element = rm_number[i];
        if (Object.keys(roman).includes(element)) {
            sum = sum + roman[element]
        }
    }
    console.log(sum);
    return sum;
}



roman_numerals_decoder(what)
// reversed words

const the_words = "The greatest victory is that which requires no battle"

const reverseWords = (str) =>{

    const str_array = str.split(' ');
    let new_str = ''

    for (let i = 0; i < str_array.length; i++) {
        const element = str_array[i];
        for (let j = element.length-1; j > 0; j--) {
            const element2 = element[j];
            new_str = new_str + element2
            new_str = new_str + ' ';
        }
        
    }
    console.log(new_str)

}

reverseWords(the_words);
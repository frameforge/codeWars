// Detect Pangram

function isPangram(str){
  for (let i = 97; i< 123; i++) {
    const char = String.fromCharCode(i)
    if (!str.toLowerCase().includes(char)) {
        return false
    }
  }  
  return true
}


isPangram("The quick brown fox jumps over the lazy dog.") // true
isPangram("The quick brown fox.") // false
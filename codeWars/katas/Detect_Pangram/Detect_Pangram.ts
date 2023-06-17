// Detect_Pangram
export {};

function isPangram(str: string): boolean {
  for (let i: number = 97; i < 123; i++) {
    const char: string = String.fromCharCode(i);
    if (!str.toLowerCase().includes(char)) {
      return false;
    }
  }
  return true;
}

isPangram("The quick brown fox jumps over the lazy dog."); // true
isPangram("The quick brown fox."); // false

// Who likes it?


function formatLikes(names) {
    const numLikes = names.length;

    if (numLikes === 0) {
        return "no one likes this";
    } else if (numLikes === 1) {
        return `${names[0]} likes this`;
    } else if (numLikes === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (numLikes === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        const numOthers = numLikes - 2;
        return `${names[0]}, ${names[1]} and ${numOthers} others like this`;
    }
}

// Test Cases
console.log(formatLikes([])); // Output: "no one likes this"
console.log(formatLikes(["Peter"])); // Output: "Peter likes this"
console.log(formatLikes(["Jacob", "Alex"])); // Output: "Jacob and Alex like this"
console.log(formatLikes(["Max", "John", "Mark"])); // Output: "Max, John and Mark like this"
console.log(formatLikes(["Alex", "Jacob", "Mark", "Max"])); // Output: "Alex, Jacob and 2 others like this"

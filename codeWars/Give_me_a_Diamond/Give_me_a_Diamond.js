function Diamond(n) {
    if (n % 2 !== 0 && n > 0) {
        let x = "";
        let maxSpace = Math.floor(n / 2);
        for (let i = 1; i - 1 < n; i++) {
            const xl = maxSpace * 2;
            if (xl < 0) {
                x = x + " ".repeat(maxSpace - maxSpace * 2) + "*".repeat(n + xl) + "\n";
            } else {
                x = x + " ".repeat(maxSpace) + "*".repeat(n - xl) + "\n";
            }
            maxSpace = maxSpace - 1;
        }
        console.log(x);
        return x
    } else {
        console.log(null);
        return null;
    }
}

Diamond(9);
Diamond(-9);
Diamond(1);
Diamond(0);
Diamond(5);

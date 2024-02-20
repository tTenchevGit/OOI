const passwordCheker = (password) => {
    let result = [];
    let digitCount = 0;
    if (password.length < 6 || password.length > 10) {
        result.push('password too short or long');
    }
    for (let i = 0; i < password.length; i++) {
        if (/[0-9]/.test(password[i])) {
            digitCount++;
        } else if (!/[a-zA-Z]/.test(password[i])) {
            result.push('Password must consist only of letters and digits');
        }

    }
    if(digitCount <= 2) {
        result.push('Password must have at least 2 digits');
    }
    return result.join('\n');
}

console.log(passwordCheker('logIn')); 
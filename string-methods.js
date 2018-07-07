let isValidPassword = function(str) {
    return (!str.includes('password') && str.length > 8 );
}

console.log( isValidPassword('asdfp') );
console.log( isValidPassword('abc123!@#$%^&') );
console.log( isValidPassword('asdadsasdadadpassword') );
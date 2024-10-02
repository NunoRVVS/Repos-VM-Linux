const fibonacci = function(count) {
    const f = [0, 1];
    
    if(count < 0) { return `OOPS`};
    if(count == 0) { return 0};

    for (let i = 2; i <= count; i++) {
       f[i] = f[i - 1] + f[i - 2];
    }
    return f[count];
};

// Do not edit below this line
module.exports = fibonacci;

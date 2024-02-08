export function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomNumberInRangeAsync(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(randomNumberInRange(min, max));
        }, 5000);
    });
}
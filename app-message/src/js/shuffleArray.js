export default function shuffleArray(array) {
    const copiedArray = [...array];
    const newArray = [];

    for(let i = copiedArray.length - 1; i >= 0; i--) {
        const rand = Math.ceil(Math.random() * i);
        const value = copiedArray.splice(rand, 1);
        newArray.push(value);
    }

    return newArray;
}
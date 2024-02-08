export default function shuffleArray(array) {
    const copiedArray = array.slice(0);
    const newArray = [];

    for(let i = copiedArray.length - 1; i >= 0; i--) {
        const rand = Math.ceil(Math.random() * i);
        const value = copiedArray.splice(rand, 1);
        newArray.push(...value);
    }

    return newArray;
}
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

const uniqueOccurrences = (arr) => {
    const freqMap = new Map();

    //  Count frequency of each number
    for (const num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    //  Extract all frequencies
    const frequencies = [...freqMap.values()];

    //  Create a Set of frequencies to remove duplicates
    const uniqueFreq = new Set(frequencies);

    //  Compare lengths
    return frequencies.length === uniqueFreq.size;
};

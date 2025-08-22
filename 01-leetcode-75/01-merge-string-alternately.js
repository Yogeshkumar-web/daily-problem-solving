// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string.

const mergeAlternately = function (word1, word2) {
  let mergedString = "";

  // sabse pahle chhoti string kon si hai, ye pata karo, kyunki us length tak hi ham letters ko alternate kar sakte hai.

  const minLength = Math.min(word1.length, word2.length);
  // Math.min() static method returns the smallest of the numbers given as input parameters, or infinity if there are no parameter.

  // ab ek loop chalana hai jo dono string ki minimum length tak chale.
  // har iteration mai word1 aur word2 se ek-ek letter lenge.
  for (i = 0; i < minLength; i++) {
    // word1 ka i-th character lo
    mergedString += word1[i];

    // word2 ka i-th character lo
    mergedString += word2[i];
  }
  // ab agai koi string lambi hai to bache hue letters ko add karo.
  if (word1.length > word2.length) {
    mergedString += word1.slice(minLength);
  } else if (word2.length > word1.length) {
    mergedString += word2.slice(minLength);
  }
  // the slice() method of string values extracts a section of this string and return it as a new string, without modifying the original string.

  return mergedString;
};

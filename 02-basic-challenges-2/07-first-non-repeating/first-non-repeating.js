const firstNonRepeating = (str) => {
  //   const charCount = {};

  //   for (const char of str) {
  //     charCount[char] = (charCount[char] || 0) + 1;
  //   }
  //   for (const char of str) {
  //     if (charCount[char] === 1) return char;
  //   }

  //   return null;

  const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }
  return null;
};

let result = firstNonRepeating('aabbccdcc');

console.log(result);

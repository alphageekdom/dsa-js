const findMissingLetter = (arr) => {
  // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // const startIndex = alphabet.indexOf(arr[0]);

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== alphabet[startIndex + i]) {
  //     return alphabet[startIndex + i];
  //   }
  // }
  // return '';

  let start = arr[0].charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].charCodeAt(0);

    if (current - start > 1) {
      current = String.fromCharCode(start + 1);
    }

    start = current;
  }
  return start;
};

console.log(findMissingLetter(['a', 'b', 'd']));

const formatPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers
    .slice(6)
    .join('')}`;

const result = formatPhoneNumber([1, 2, 3, 5, 5, 5, 5, 5, 5, 5]);

console.log(result);

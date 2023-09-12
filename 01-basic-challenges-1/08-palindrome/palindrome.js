// Short Way
const isPalindrome1 = (str) => {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = formattedStr.split('').reverse().join('');

  return formattedStr === reversedStr;
};

// Long Way
const isPalindrome2 = (str) => {
  const formattedStr = removeAlphaNumeric(str.toLowerCase());
  const reverseStr = reversedString(formattedStr);

  return formattedStr === reverseStr;
};

const removeAlphaNumeric = (str) => {
  let formattedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isNonAlphaNumber) {
      formattedStr += char;
    }
  }
  return formattedStr;
};

const isNonAlphaNumber = (char) => {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
};

const reversedString = (str) => {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

modules.export = { isPalindrome1, isPalindrome2 };

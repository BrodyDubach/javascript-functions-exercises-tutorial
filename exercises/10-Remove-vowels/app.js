// Your code goes here
const rapid = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (!'aeiou'.includes(char)) {
        newStr += char.toUpperCase();
      }
    }
    return newStr;
  };
  

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));

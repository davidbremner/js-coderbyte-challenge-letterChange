function LetterChanges(str) {
  let results = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "z") {
      results += "a";
    } else {
      const letterCode = str.charCodeAt(i) + 1;
      if (letterCode < 97 || letterCode > 122) {
        results += str[i];
      } else {
        const toString = String.fromCharCode(letterCode);
        if (
          toString === "a" ||
          toString === "e" ||
          toString === "i" ||
          toString === "o" ||
          toString === "u"
        ) {
          results += toString.toUpperCase();
        } else {
          results += toString;
        }
      }
    }
  }

  return results;
}

console.log(LetterChanges("hello world!"));

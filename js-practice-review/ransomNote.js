/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let result = null;
  let index = 0;
  let mag = magazine;

  if (ransomNote === magazine || !ransomNote) {
    return true;
  }

  if (!magazine) {
    return false;
  }

  do {
    const letter = ransomNote[index];
    result = mag.includes(letter);
    if (result === true) {
      mag = mag.replace(letter, '');
    }
    index += 1;
  } while (index < ransomNote.length && result === true);

  return result;
};

var ransomNote = '';
var magazine = '';

console.log(canConstruct(ransomNote, magazine));

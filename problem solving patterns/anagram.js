/* An anagram is a word, phrase, 
or name formed by rearranging the
letters of another, such as cinema,
formed from iceman. */

// time complexity o(n)
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    // frequency pattern
    let frequency1 = {}
    let frequency2 = {}
    for (let val of str1) {
        frequency1[val] = frequency1[val] + 1 || 1;
    }

    for (let val of str2) {
        frequency2[val] = frequency2[val] + 1 || 1;
    }
    for (let key of str1) {
        if (frequency1[key] !== frequency2[key]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('qwerty', "wertqy"));
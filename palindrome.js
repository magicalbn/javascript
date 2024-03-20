const isPalindrome = (str) => {
    if (!str || str.length < 1) {
        return false;
    }
    if (str.length == 1) {
        return true;
    }

    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
};

console.log(isPalindrome(""));
console.log(isPalindrome());
console.log(isPalindrome("S"));
console.log(isPalindrome("saas"));
console.log(isPalindrome("church"));
console.log(isPalindrome("rotate"));
console.log(isPalindrome("123454321"));

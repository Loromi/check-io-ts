// import assert from "assert";

function unixMatch(filename: string, pattern: string): boolean {
    let lenFile: number = filename.length;
    let lenPtrn: number = pattern.length;

    while (lenFile > 0) {
        lenFile--;
        lenPtrn = pattern.length;
        while (lenPtrn > 0) {
            lenPtrn--;
            if (pattern.charAt(lenPtrn) === filename.charAt(lenFile)) {
                return true;
            }
        }
    }
    return false;
}

console.log("false = ", unixMatch('log1.txt', 'log[234567890].txt'));
console.log("true = ", unixMatch('log1.txt', 'log[1234567890].txt'));
console.log("true = ", unixMatch('log1.txt', 'log[!0].txt'));
console.log("false = ", unixMatch('log1.txt', 'log[!1].txt'));

// These "asserts" are used for self-checking
// assert.equal(unixMatch("log1.txt", "log[1234567890].txt"), true);
// assert.equal(unixMatch("log1.txt", "log[!1].txt"), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");

/* BUILD:   tsc unix-match-part-2.ts
 * RUN:     node mission/unix-match-part-2/unix-match-part-2.js */
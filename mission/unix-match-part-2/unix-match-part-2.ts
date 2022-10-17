// import assert from "assert";

function unixMatch(filename: string, pattern: string): boolean {
    let ptrnValues: string[] = pattern.split('[')[1].split(']')[0].split('');
    let lenPtrn: number = ptrnValues.length, j: number = 0;
    let seqMatch: boolean = false, ptrnMatch: boolean = true;

    for (let i = 0; i < filename.length; i++) {
        while (pattern[i + j] === "*" || pattern[i + j] === "?" || pattern[i + j] === filename[i]) {
            if (pattern[i + j] !== filename[i]) {
                ptrnMatch = false;
            }
            if (pattern[i + j] === "[" && ptrnValues.indexOf(filename[i]) !== -1) {
                if (pattern[i + 1] !== "!") {
                    seqMatch = true;
                } else {
                    seqMatch = false;
                }
                j = lenPtrn;
            }
        i++;
        }
    }
    console.log(`seqMatch: ${seqMatch}, ptrnMatch: ${ptrnMatch}`);
    return (seqMatch && ptrnMatch);
}

console.log("true = ", unixMatch('log9.txt', '*[234567890]*'));
console.log("true = ", unixMatch('log1.txt', 'log[234567890].txt'));
console.log("true = ", unixMatch('log1.txt', 'log[!0].txt'));
console.log("false = ", unixMatch('log1.txt', 'log[!1].txt'));

// These "asserts" are used for self-checking
// assert.equal(unixMatch("log1.txt", "log[1234567890].txt"), true);
// assert.equal(unixMatch("log1.txt", "log[!1].txt"), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");

/* BUILD:   tsc unix-match-part-2.ts
 * RUN:     node mission/unix-match-part-2/unix-match-part-2.js */
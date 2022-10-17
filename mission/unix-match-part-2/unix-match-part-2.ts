// import assert from "assert";

function unixMatch(filename: string, pattern: string): boolean {
    let ptrnValues: string[];
    let ptrnBgn: string;
    let ptrnEnd: string;
    let fileBgn: string;
    let fileEnd: string;
    let fileMid: string;

    if (pattern.indexOf('[') !== -1) {
        ptrnValues = pattern.split('[')[1].split(']')[0].split('');
        ptrnBgn = pattern.split('[')[0];
        ptrnEnd = pattern.split(']')[1];
        fileBgn = filename.slice(0, ptrnBgn.length);
        fileEnd = filename.slice(filename.length - ptrnEnd.length);
        fileMid = filename.slice(ptrnBgn.length, filename.length - ptrnEnd.length);
    } else {
        return (filename === pattern);
    }
    if (fileBgn !== ptrnBgn || fileEnd !== ptrnEnd) {
        return (false);
    }
    if (ptrnValues.indexOf(fileMid[0]) > -1) {
        return (ptrnValues[0] != "!");
    } else {
        return (ptrnValues[0] == "!");
    }
}

console.log("true = ", unixMatch('log9.txt', 'log[234567890].txt'));
console.log("true = ", unixMatch('log1.txt', 'log[1234567890].txt'));
console.log("true = ", unixMatch('log1.txt', 'log[!0].txt'));
console.log("false = ", unixMatch('log1.txt', 'log[!1].txt'));

// These "asserts" are used for self-checking
// assert.equal(unixMatch("log1.txt", "log[1234567890].txt"), true);
// assert.equal(unixMatch("log1.txt", "log[!1].txt"), false);

console.log("Coding complete? Click 'Check' to earn cool rewards!");

/* BUILD:   tsc unix-match-part-2.ts
 * RUN:     node mission/unix-match-part-2/unix-match-part-2.js */
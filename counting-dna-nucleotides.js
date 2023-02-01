/* Problem
A string is simply an ordered collection of symbols selected from some alphabet and formed into a word; 
the length of a string is the number of symbols that it contains.

An example of a length 21 DNA string (whose alphabet contains the symbols 'A', 'C', 'G', and 'T') 
is "ATGCTTCAGAAAGGTCTTACG."

Given: A DNA string s of length at most 1000 nt.

Return: Four integers (separated by spaces) counting the respective number of times 
that the symbols 'A', 'C', 'G', and 'T' occur in s. */

const s = 'CCCGATCCCAGGGCTAGCTTTTAGGGCAAGGGGTGGTTAAACGCGTCGCTCTGACAACGGGAAGATCGTCTTGGACAAGATTGAGTCTCATTGAGGGCGAGTCTTGTTGTCGAAATACCTCCGGTTCCGTGCTACAAGCCTGGGGCTGGTGAAAGAAGCACTGGATCGCACCTGTACAAGCGCTCCCGCATCGCGGGGCGAGGCAGGGTTACTATATGAACTAACGAAATCCAGCTCAACGGAACATAGTGGTGCGTGGCCCCGGTGTAGTTGGCCACAATCCGAACTAACTAGTTTGAATCACTTTAGCCACTTCTTTCAGAAAGGGGTATCAATTGCACACTATACGGACGTGAACGATCGCTTAAGTTCCTCCGTCACTCCCCCGGGGTAATCGTTCATTATTTAGTACATACCATCCCACGGAGGTGCGCGGCACTACTCGTCGAATTGAAAAAGATTATCTACAAGCATAAATCCCAAAGTTTTAGTACGCCACCTAAGCCAAAACCTAGACTTATATGAGAACTACAGTTTTGTGGACGCAGGATCATTTCACCGAAGCAGCCGTCTGACATCTAATAAATTACGGCCTATTGAACTGGGGAACCTCATTTTCGGCCTATATACGAAGGATGAGTCGGTAGGAGGTCAAATTAGACCTAAGTACACTTCACAAACAGTTTTTTGTCAGTGTTAATTACTTTAGTCGGTAATCACTTATCTCTGGTCACTTACCTCTCGCTCCCGGAAGATTGGGGTTTGATAAAAAATCTGCGCGTGAATGCCACCACAAGGTTTTTGCGGTTGTAAGATGTTCTATGGCATCATACGGGACCGTTATCCATTGGGCTGGCGCATTTTTTACGTGACACGATACGGCGGCAGAGCCGCACTTTTGATCACATTGTCTGTTCTACGCACCAGACCCTCTCGGGGACTCGGATGA';

// Function to count occurances of a character in a string
function countOccurrences(str, ch) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        // check if the given character matches the character in the string
        if (str[i] == ch) {
            counter++;
        }        
    }
return counter;
}
// counter for occurances of 'A'
const numA = countOccurrences(s, 'A');
console.log(numA);

// counter for occurances of 'C'
const numC = countOccurrences(s, 'C');
console.log(numC);

// counter of occurances of 'G'
const numG = countOccurrences(s, 'G');
console.log(numG);

// counter of occurances of 'T'
const numT = countOccurrences(s, 'T');
console.log(numT);
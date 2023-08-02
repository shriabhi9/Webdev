/**
 * Mask the last 4 characters with #
 */

const str = "12346789987654321" // 12345678998765####

const maskchar = "#".repeat(4) // number of copies to append
const result = str.slice(0,str.length - 4) + maskchar
console.log(result)
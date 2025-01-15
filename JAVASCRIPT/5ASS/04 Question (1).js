

function extractGroups(pattern, str) {
    let regex = new RegExp(pattern);

    // Find matches with capturing groups
    let match = str.match(regex);

    // If there's a match, return the captured groups, otherwise return an empty array
    if (match) {
        return match.slice(1);
    } else {
        return [];
    }
}


let str = "Today's date is 25-06-2024.";

// Pattern to capture day, month, and year from a date
let datePattern = "(\\d{2})-(\\d{2})-(\\d{4})";

let Groups = extractGroups(datePattern, str);

console.log("Extracted Groups:",Groups); 
// Output: ["25", "06", "2024"]

// Additional test cases
let testString2 = "My birthday is on 22/08/2000.";
let datePattern2 = "(\\d{2})/(\\d{2})/(\\d{4})";
let extractedGroups2 = extractGroups(datePattern2, testString2);
console.log("Extracted Groups:", extractedGroups2); 
// Extracted Groups: [ '25', '06', '2024' ]
// Extracted Groups: [ '15', '08', '1990' ]

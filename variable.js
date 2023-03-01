const keyToTopic = {
    "Array": 0,
    "String": 1,
    "Hash Table": 2,
    "Two Pointer": 3,
    "Sliding Window": 4,
    "Binary Search": 5,
    "Stack": 6,
    "Queue": 7,
    "Depth First Search": 8,
    "Linked List": 9,
    "Breadth First Search": 10,
    "Tree": 11,
    "Tries": 12,
    "Heap / Priority Queue": 13,
    "Recursion": 14,
    "Back Tracking": 15,
    "Graph": 16,
    "Advanced Graph": 17,
    "1-D Dynamic Programming": 18,
    "2-D Dynamic Programming": 19,
    "Greedy": 20,
    "Math & Geometry": 21,
    "Bit manupulation": 22,
}
let problemOn = "";
let keyOn = -1
let welcomeModal = false
let flags = {}
for (let i = 0; i<23; i++){
    flags[i] = {}
}
// localStorage.flags = JSON.stringify(flags)

let problems = {
    0:{
        0:{topic: "Array", easy:15, medium:6, hard:0, done: 0, 
            sequence:[1, 1480, 2176, 1920, 1929, 268,  1365, 1431, 1470, 26, 1588, 561, 867, 832, 2373, 15, 48, 189, 334, 435, 452]},

        1:{difficulty: "easy", url: "https://leetcode.com/problems/two-sum/", problemName: "Two Sum", flag: false, key:1},

        1480:{difficulty: "easy", url: "https://leetcode.com/problems/running-sum-of-1d-array/", problemName: "Running Sum of 1d Array", flag: false, key:1480},

        2176:{difficulty: "easy", url: "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/", problemName: "Count Equal and Divisible Pairs in an Array", flag: false, key:2176},

        1920:{difficulty: "easy", url: "https://leetcode.com/problems/build-array-from-permutation/", problemName: "Build Array from Permutation", flag: false, key:1920},

        1929:{difficulty: "easy", url: "https://leetcode.com/problems/concatenation-of-array/", problemName: "Concatenation of Array", flag: false,key:1929},

        268:{difficulty: "easy", url: "https://leetcode.com/problems/missing-number/", problemName: "Missing Number", flag: false,key:268},

        1365:{difficulty: "easy", url: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/", problemName: "How Many Numbers Are Smaller Than the Current Number", flag: false, key:1365},

        1431:{difficulty: "easy", url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/", problemName: "Kids With the Greatest Number of Candies", flag: false, key:1431},

        1470:{difficulty: "easy", url: "https://leetcode.com/problems/shuffle-the-array/submissions/", problemName: "Shuffle the Array", flag: false, key: 1470},

        26:{difficulty: "easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", problemName: "Remove Duplicates from Sorted Array", flag: false, key:26},

        1588:{difficulty: "easy", url: "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/", problemName: "Sum of All Odd Length Subarrays", flag: false, key:1588},

        561:{difficulty: "easy", url: "https://leetcode.com/problems/array-partition/", problemName: "Array Partition", flag: false, key:561},

        867:{difficulty: "easy", url: "https://leetcode.com/problems/transpose-matrix/", problemName: "Transpose Matrix", flag: false, key:867},

        832:{difficulty: "easy", url: "https://leetcode.com/problems/flipping-an-image/submissions/", problemName: "Flipping an Image", flag: false, key:832},

        2373:{difficulty: "easy", url: "https://leetcode.com/problems/largest-local-values-in-a-matrix/", problemName: "Largest Local Values in a Matrix", flag: false, key:2373},

        15:{difficulty: "medium", url: "https://leetcode.com/problems/3sum/", problemName: "3Sum", flag: false, key:15},

        48:{difficulty: "medium", url: "https://leetcode.com/problems/rotate-image/", problemName: "Rotate Image", flag: false, key:48},

        189:{difficulty: "medium", url: "https://leetcode.com/problems/rotate-array/", problemName: "Rotate Array", flag: false, key:189},

        334:{difficulty: "medium", url: "https://leetcode.com/problems/increasing-triplet-subsequence/", problemName: "Increasing Triplet Subsequence", flag: false, key:334},

        435:{difficulty: "medium", url: "https://leetcode.com/problems/non-overlapping-intervals/", problemName: "Non-overlapping Intervals", flag: false, key:435},

        452:{difficulty: "medium", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", problemName: "Minimum Number of Arrows to Burst Balloons", flag: false, key:452},

        
        },
    1:{
        0:{topic: "String", easy:14, medium:4, hard:0, done: 0, sequence:[709,1108,1816,1662,1221,1678,1773,2315,1614,1844,1859,2194,2278,67,8,2125,535,1689]},
        
        709:{difficulty: "easy", url: "https://leetcode.com/problems/to-lower-case/", problemName: "To Lower Case", flag: false, key:709},
        
        1108:{difficulty: "easy", url: "https://leetcode.com/problems/defanging-an-ip-address/", problemName: "Defanging an IP Address", flag: false, key:1108},

        1816:{difficulty: "easy", url: "https://leetcode.com/problems/truncate-sentence/", problemName: "Truncate Sentence", flag: false, key:1816},
        
        1662:{difficulty: "easy", url: "https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/", problemName: " Check If Two String Arrays are Equivalent", flag: false, key:1662},

        1221:{difficulty: "easy", url: "https://leetcode.com/problems/split-a-string-in-balanced-strings/", problemName: "Split a String in Balanced Strings", flag: false, key:1221},

        1678:{difficulty: "easy", url: "https://leetcode.com/problems/goal-parser-interpretation/", problemName: "Goal Parser Interpretation", flag: false, key:1678},

        1773:{difficulty: "easy", url: "https://leetcode.com/problems/count-items-matching-a-rule/", problemName: "Count Items Matching a Rule", flag: false, key:1773},

        2315:{difficulty: "easy", url: "https://leetcode.com/problems/count-asterisks/", problemName: "Count Asterisks", flag: false, key:2315},
        
        1614:{difficulty: "easy", url: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/", problemName: "Maximum Nesting Depth of the Parentheses", flag: false, key:1614},

        1844:{difficulty: "easy", url: "https://leetcode.com/problems/replace-all-digits-with-characters/", problemName: "Replace All Digits with Characters", flag: false, key:1844},

        1859:{difficulty: "easy", url: "https://leetcode.com/problems/sorting-the-sentence/", problemName: "Sorting the Sentence", flag: false, key:1859 },


        2194:{difficulty: "easy", url: "https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/", problemName: "Cells in a Range on an Excel Sheet", flag: false, key:2194},
        
        2278:{difficulty: "easy", url: "https://leetcode.com/problems/percentage-of-letter-in-string/", problemName: "Percentage of Letter in String", flag: false, key:2278},
        
        67:{difficulty: "easy", url: "https://leetcode.com/problems/add-binary/", problemName: "Add Binary", flag: false, key:67},

        8:{difficulty: "medium", url: "https://leetcode.com/problems/string-to-integer-atoi/", problemName: "String to Integer (atoi)", flag: false, key: 8 },
       
    
        2125:{difficulty: "medium", url: "https://leetcode.com/problems/number-of-laser-beams-in-a-bank/", problemName: "Number of Laser Beams in a Bank", flag: false, key: 2125 },
        
        535:{difficulty: "medium", url: "https://leetcode.com/problems/encode-and-decode-tinyurl/", problemName: "Encode and Decode TinyURL", flag: false, key: 535 },

        1689:{difficulty: "medium", url: "https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/", problemName: "Partitioning Into Minimum Number Of Deci-Binary Numbers", flag: false, key: 1689 },
            
        },
    2:[{topic: "Hash Map", easy:3, medium:0, hard:0, done: 0, sequence:[771, 2011, 2325] },
        {difficulty: "easy", url: "https://leetcode.com/problems/jewels-and-stones/", problemName: "Jewels and Stones", flag: false, key:771},
        {difficulty: "easy", url: "https://leetcode.com/problems/final-value-of-variable-after-performing-operations/", problemName: "Final Value of Variable After Performing Operations", flag: false, key:2011},
        {difficulty: "easy", url: "https://leetcode.com/problems/decode-the-message/", problemName: "Decode the Message", flag: false, key:2325},
        // {difficulty: "easy", url: "", problemName: "Two Sum", flag: false, key:0},
        ],
    3:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    4:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    5:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    6:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    7:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    8:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    9:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    10:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    11:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    12:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    13:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    14:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    15:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    16:[{topic: "Graph", easy:0, medium:1, hard:0, done: 0, sequence:[994]},
        {difficulty: "medium", url: "https://leetcode.com/problems/rotting-oranges/", problemName: "Rotting Oranges", flag: false, key:994}],
        // {difficulty: "easy", url: "", problemName: "Two Sum", flag: false, key:0}],
    17:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    18:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    19:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    20:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    21:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
    22:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
}

const heading = {
    0: [`[ `, ` ]`],
    1: [`" `, ` "`],
    2: [`{ `, ` }`],
    3: [`i `, ` j`],
    4: [`start `, ` end`],
    5: ["( ", ")//2"],
    6: ["", ".pop()"],
    7: ["", ".pop(0)"],
    8: ["dfs(", ")"],
    9: ["", ".next"],
    10: ["bfs(", ")"],
    11: ["", ".val"],
    12: [``, `["a"]`],
    13: ["heapq.heapify(", ")"],
    14: [``, ``],
    15: [`return(`, `)`],
    16: [``, `[i]`],
    17: [``, `[i]`],
    18: [``, `[i-1]`],
    19: [``, `[i-1][j-1]`],
    20: [`<`, `>`],
    21: [`& `, ` |`],
    22: [``, `<<i`],
}

function updateProblemOn(s){
    problemOn = s
    keyOn = keyToTopic[s]
}
function updateModal(){
    welcomeModal = true
    saveData()
}



function saveData(){
    localStorage.problemOn = problemOn
    localStorage.keyOn = keyOn
    // localStorage.problems = JSON.stringify(problems)
    localStorage.welcomeModal = welcomeModal
    localStorage.flags = JSON.stringify(flags)

}



function loadData(){
    problemOn = localStorage["problemOn"]
    keyOn = localStorage["keyOn"]
    // problems = JSON.parse(localStorage["problems"])
    welcomeModal = localStorage["welcomeModal"]
    flags = JSON.parse(localStorage["flags"])
}

// loadData()



export {problemOn, keyToTopic, updateProblemOn, problems, keyOn, saveData, loadData, heading, welcomeModal, updateModal, flags} ;


// const problems = {
//     0:[
//         {topic: "Array", easy:15, medium:6, hard:0, done: 0},

//         {difficulty: "easy", url: "https://leetcode.com/problems/two-sum", problemName: "Two Sum", flag: false, key:1},

//         {difficulty: "easy", url: "https://leetcode.com/problems/running-sum-of-1d-array/", problemName: "Running Sum of 1d Array", flag: false, key:1480},

//         {difficulty: "easy", url: "https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/", problemName: "Count Equal and Divisible Pairs in an Array", flag: false, key:2176},

//         {difficulty: "easy", url: "https://leetcode.com/problems/build-array-from-permutation/", problemName: "Build Array from Permutation", flag: false, key:1920},

//         {difficulty: "easy", url: "https://leetcode.com/problems/concatenation-of-array/", problemName: "Concatenation of Array", flag: false,key:1929},

//         {difficulty: "easy", url: "https://leetcode.com/problems/missing-number/", problemName: "Missing Number", flag: false,key:268},

//         {difficulty: "easy", url: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/", problemName: "How Many Numbers Are Smaller Than the Current Number", flag: false, key:1365},

//         {difficulty: "easy", url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/", problemName: "Kids With the Greatest Number of Candies", flag: false, key:1431},

//         {difficulty: "easy", url: "https://leetcode.com/problems/shuffle-the-array/submissions/", problemName: "Shuffle the Array", flag: false, key: 1470},

//         {difficulty: "easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", problemName: "Remove Duplicates from Sorted Array", flag: false, key:26},

//         {difficulty: "easy", url: "https://leetcode.com/problems/sum-of-all-odd-length-subarrays/", problemName: "Sum of All Odd Length Subarrays", flag: false, key:1588},

//         {difficulty: "easy", url: "https://leetcode.com/problems/array-partition/", problemName: "Array Partition", flag: false, key:561},

//         {difficulty: "easy", url: "https://leetcode.com/problems/transpose-matrix/", problemName: "Transpose Matrix", flag: false, key:867},

//         {difficulty: "easy", url: "https://leetcode.com/problems/flipping-an-image/submissions/", problemName: "Flipping an Image", flag: false, key:832},

//         {difficulty: "easy", url: "https://leetcode.com/problems/largest-local-values-in-a-matrix/", problemName: "Largest Local Values in a Matrix", flag: false, key:2373},

//         {difficulty: "medium", url: "https://leetcode.com/problems/3sum/", problemName: "3Sum", flag: false, key:0},

//         {difficulty: "medium", url: "https://leetcode.com/problems/rotate-image/", problemName: "Rotate Image", flag: false, key:48},

//         {difficulty: "medium", url: "https://leetcode.com/problems/rotate-array/", problemName: "Rotate Array", flag: false, key:189},

//         {difficulty: "medium", url: "https://leetcode.com/problems/increasing-triplet-subsequence/", problemName: "Increasing Triplet Subsequence", flag: false, key:334},

//         {difficulty: "medium", url: "https://leetcode.com/problems/non-overlapping-intervals/", problemName: "Non-overlapping Intervals", flag: false, key:435},

//         {difficulty: "medium", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", problemName: "Minimum Number of Arrows to Burst Balloons", flag: false, key:452},

        
//     ],
//     1:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     2:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     3:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     4:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     5:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     6:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     7:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     8:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     9:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     10:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     11:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     12:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     13:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     14:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     15:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     16:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     17:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     18:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     19:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     20:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     21:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
//     22:[{topic: "Array", easy:0, medium:0, hard:0, done: 0},],
// }

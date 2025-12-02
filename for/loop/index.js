// // var aplhabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
// //     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
// // ]
// // var vowels = []
// // var vowellist = [`A`, `E`, `I`, `O`, `U`]

// // let copy = aplhabets.slice()
// // var nonvowels = [];

// // for (let i = 0; i < copy.length; i++) {
// var letter = copy[i];

// //     if (vowellist.includes(letter)) {
// //         vowels.push(letter);

// //     } else {
// //         nonvowels.push(letter);
// //     }
// // }
// // console.log("Alphabets are: [ " + nonvowels.join(", ") + " ]");
// // console.log("Vowels are: [ " + vowels.join(", ") + " ]");

// // let alphabets = [
// //     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
// //     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
// // ];

// // let vowels = [];
// // let vowelList = ['A', 'E', 'I', 'O', 'U'];

// // // slice → alphabet ka copy
// // let copy = alphabets.slice();

// // // non-vowels ko ek array me store karenge
// // let nonVowels = [];

// // for (let i = 0; i < copy.length; i++) {
// //     let letter = copy[i];

// //     if (vowelList.includes(letter) && vowelList.length > 0) {
// //         vowels.push(letter);       // vowel array
// //     }
// //     else {
// //         nonVowels.push(letter);    // non-vowel array
// //     }
// // }

// // // join → comma + space
// // console.log("Alphabets are: [ " + nonVowels.join(", ") + " ]");
// // console.log("Vowels are: [ " + vowels.join(", ") + " ]");

// // var color = ["red", "green", "blue", "yellow", "cyan", "magenta", "white", "black"]
// // var primary = []

// // var primarycolor = ["red", "green", "blue", "yellow"]
// // var rang = color.slice()

// // var othercolors = [];


// // for (let i = 0; i < rang.length; i++) {

// //     if (primarycolor.includes(rang[i])) {
// //         primary.push(rang[i]);
// //     } else {
// //         othercolors.push(rang[i])
// //     }
// // }
// // console.log("Colors are: [ " + othercolors.join(", ") + " ]");
// // console.log("Primary Colors are: [ " + primary.join(", ") + " ]");



// var city = ["karachi", "multan", "lahore", "islamabad"];
// var getvalue = prompt("Enter city name");

// var convertnormalValue = getvalue.toLowerCase()
// var getCorrectValue;

// for (var index = 0; index < city.length; index++) {

//     if (convertnormalValue.length == city[index].length) {

//     } else {

//         for (var a = 0; a <= convertnormalValue.length; a++) {
//             var emptySpace;

//             if (convertnormalValue[a] == " ") {
//                 // console.log("aa >>>", a);
//                 emptySpace = a + 1;
//             }
//             getCorrectValue = convertnormalValue.slice(emptySpace);
//         }

//     }
// }
// console.log("get correct value", getCorrectValue)
// console.log("get correct value", getCorrectValue.length)




// chat gpt question

// var word = prompt("Enter Your Given Word");
// var alphabets = 0;
// var numbers = 0;
// var specialcharacters = 0;


// for (var i = 0; i < word.length; i++) {
//     var charac = word[i];

//     if ((charac >= `a` && charac <= `z`) || (charac >= `A` && charac <= `Z`)) {
//         alphabets++;
//     }
//     else if (charac >= '0' && charac <= '9') {
//         numbers++;
//     }
//     else {
//         specialcharacters++;
//     }
// }

// console.log("alphabets are:", alphabets);
// console.log("Numbers are:", numbers);
// console.log("special characters are:", specialcharacters);




// var sentence = prompt("enter your sentence")

// var words = sentence.split(" ");
// var wordscount = {}

// var longest = "";
// var shortest = words[0];

// for (let i = 0; i < words.length; i++) {
//     var w = words[i];


//     if (w.length > longest.length) {
//         longest = w;
//     }

//     if (w.length < shortest.length) {

//         shortest = w;
//     }
//     if (wordscount[w]) {
//         wordscount[w]++;
//     } else {
//         wordscount[w] = 1;

//     }

// }
// console.log("Total Words:", words.length);
// console.log("Longest Word:", longest);
// console.log("Shortest Word:", shortest);
// console.log("Word Count:", wordscount);

// var sentence = prompt("enter sentence")
// var vowel = ["a", "e", "i", "o", "u"];
// var words = sentence.split(" ");

// for (var i = 0; i < words.length; i++) {
//     var pov = words[i];
//     var vowelCount = 0;

//     for (var j = 0; j < pov.length; j++) {
//         var letter = pov[j];
//         if (vowel.includes(letter.toLowerCase())) {
//             vowelCount++;
//         }
//     }

// }
// console.log(pov + " → " + vowelCount + " vowels");

// var sentence = prompt("enter your word");
// var word = sentence.split(" ");

// for (var i = 0; i < word.length; i++) {
//     var words = word[i]
//     if (words == "") {
//         continue;
//     }

//     var first = words[0]
//     var last = words[words.length - 1]
//     console.log(words + " → first: " + first + ", last: " + last);
// }


// var sentence = prompt("enter you word")
// var word = sentence.split(" ");
// var capitalcount = 0;
// var smallcount = 0;

// for (var i = 0; i < word.length; i++) {
//     var letter = word[i];

//     for (let j = 0; j < letter.length; j++) {
//         var char = letter[j];

//         if (char >= "A" && char <= "Z") {
//             capitalcount++;
//         }

//         if (char >= "a" && char <= "z") {
//             smallcount++;
//         }
//     }
// }

// console.log("capital letter:", capitalcount);
// console.log("small letter:", smallcount);



var sentence = prompt("Enter your sentence:");
var vowels = "aeiouAEIOU";
var vowelCount = 0;

for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];

    if (vowels.includes(char)) {
        vowelCount++;
    }
}

console.log("Total vowels:", vowelCount);

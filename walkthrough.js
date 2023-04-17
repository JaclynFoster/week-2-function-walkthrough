let pikachuHp = 100;

pikachuHp = String(pikachuHp);

let sheildonHp = 120;

let theWinnerIs = "The winner is: Pikachu!";

theWinnerIs = theWinnerIs.replace("Pikachu", "Shieldon");

console.log(theWinnerIs);

if (theWinnerIs.includes("Pikachu")) {
console.log("Pikachu is epic!")
} else {
 console.log("Pikachu, you let me down...")
}

let kebabCase = theWinnerIs.replace(":", "");
kebabCase = kebabCase.replace("!", "");
kebabCase = kebabCase.toLowerCase();

//You can also chain it
//let kebabCase = theWinnerIs.replace(":", "").replace("!", "").toLowerCase().replaceAll(" ", "-")

kebabCase = kebabCase.replaceAll(" ", "-"); // way 1

// let kebabCaseWordArray = kebabCase.split(" "); way 2
// kebabCase = kebabCaseWordArray.join("-");

console.log(kebabCase);



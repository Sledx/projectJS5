var femaleNames = ["Kamil", "Robert", "Andrzej", "Olek"],
    maleNames = ["Gosia", "Anna", "Alina", "Ola"];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = "Marian";

if (allNames.indexOf(newName) === -1) {//ok czaje co oznacza -1 teraz :)
    allNames.push(newName);
    console.log("dodano imię " + newName + " do tablicy, ktora aktualnie wygląda tak: " + allNames);
} else {
    console.log("Imię znajduje się już w tablicy");
}
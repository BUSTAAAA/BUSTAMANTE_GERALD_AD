var height = 6;
var string = "";
for (var i = 0; i < height; i++) {
    for (var a = 0; a < i; a++) {
        string += "* ";
    }
    string += "\n";
}
console.log(string);
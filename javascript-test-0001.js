const n = 5; // half height of diamond

for (let i = 1; i <= (2 * n - 1); i++) {

    let row = "";
    
    // distance from middle line
    let dist = i <= n ? n - i : i - n;

    // total width of pattern
    let width = 2 * n - 1;

    for (let j = 0; j < width; j++) {

        // left star position
        let leftStar = dist;

        // right star position
        let rightStar = width - dist - 1;

        if (j === leftStar || j === rightStar) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}

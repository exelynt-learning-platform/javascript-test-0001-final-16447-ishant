 const n = 5; 
    for (let i = 1; i <= (2 * n - 1); i++) {
  let row = "";
 let dist = i <= n ? n - i : i - n;
  let width = 2 * n - 1;
 for (let j = 0; j < width; j++) {
   let leftStar = dist;
     let rightStar = width - dist - 1;
 if (j === leftStar || j === rightStar) {
            row += "*";
        } else {
            row += " ";
        }    }
   console.log(row);
}

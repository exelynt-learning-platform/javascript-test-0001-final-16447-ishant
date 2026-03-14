const n = 5;
    for (let i = 1; i <= (2 * n - 1); i++) {
  let rows = "";
 let distances = i <= n ? n - i : i - n;
     let widthes = 2 * n - 1;
 for (let j = 0; j < widthes; j++) {
      let leftstars = distances;
    let rightstars = widths - distances - 1;
      if (j === leftstars || j === rightstars) {
     rows += "*";
       } else {
         rows += " ";
          }    }
   console.log(rows);
}

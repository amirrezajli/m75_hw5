let fileContent = "12,fatemeh\n" + "22,zahra\n" + "36,ali\n" + "45,reza";
const myArray = fileContent.split("\n");   //[ '12,fatemeh', '22,zahra', '36,ali', '45,reza']
let y = {};
myArray.forEach((item)=>{
  let a = item.split(",");  // a=['12', 'fateme']
  let key = a[0];
  let value = a[1];
  y[key] = value;  //y={12:fatemeh}
});


console.log(y)
// let x = {
//   12: "fatemeh",
//   22: "zahra",
//   36: "ali",
//   45: "reza",
// };




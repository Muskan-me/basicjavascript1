//isFinite................
console.log(Number.isFinite(9.7));//true
console.log(Number.isFinite(5 / 6));//ture
console.log(Number.isFinite(6 / 5));//true
console.log(Number.isFinite(6 / 0));//false
//isInteger.............
console.log(Number.isInteger(6 / 5));//false
console.log(Number.isInteger(5));//true
//isNaN...........The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type.
console.log(Number.isNaN());//false
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(67));//false
console.log(Number.isNaN(0/0));//true
console.log(Number.isNaN({}));//false
console.log(Number.isNaN(undefined));//false
//parsefloat
console.log(Number.parseFloat("3.14"));//3.14
console.log(Number.parseFloat("muku"));//Nan
//1-masala
// let a = +prompt("Marhamat son kiriting: ")
// let i = 1;
// let total = 0;
// while(i <= a){
//     total+= i;
//     i++;
// }
// console.log(total);

// 2-masala
// let a = +prompt("Marhamat son kiriting: ")
// let i = 1;
// let total = 1;
// while(i <= a){
//     if (i % 3 == 0) {
//         total*= i;
//     }

//     i++;
// }
// console.log(total);

// 3-masala
// let a = +prompt("Marhamat 1-soni kiriting: ")
// let b = +prompt("Marhamat 2-soni kiriting: ")
// let i = a;
// let total = 0;
// while(i <= b){
//     if (i % 3 == 0 && i % 7 == 0) {
//         total++
//     }

//     i++;
// }
// console.log(total);

// 4-masala
// let a = +prompt("Marhamat son kiriting: ")
// let i = 1;
// let res = 0;
// let total = 0;
// while(i <= a){
//     if (a % i == 0) {
//         total++
//     }

//     i++;
// }
// if ( total > 2 ) {
//     res = "Bu tub son emas"
// }
// else{
//     res = "Bu tub son"
// }
// console.log(res);

// 5-masala
// let a = +prompt("Marhamat son kiriting: ");
// let count = 0;
// let total = 0;
// let i = 1;
// let f = 1;
// while (i <= a) {
//   count++;
//   i *= 10;
// }
// while (f <= count) {
//   total += Math.trunc(a / 10 ** (count - 1));
//   f++;
// }

// console.log  (total);

let  n = +prompt("Marhamat son kiriting: ");
let i = 1;
let sum = 0;
while (n >= i ) {
  sum = sum +(n % 10)
  n = Math.trunc(n / 10)
}
console.log(sum);

// 6-masala
// let a = +prompt("Marhamat son kiriting : ");
// let b = a % 10;
// let on = Math.trunc(a /10 % 10);
// let yuz = Math.trunc(a / 100);
// let result = '';
// switch (yuz) {
//     case 1:
//         result = `Bir yuz`
//         break;
//     case 2:
//         result = `Ikki yuz`
//         break;
//     case 3:
//         result = `Uch yuz`
//         break;
//     case 4:
//         result = `Tort yuz`
//         break;
//     case 5:
//         result = `Besh yuz`
//         break;
//     case 6:
//         result = `Olti yuz`
//         break;
//     case 7:
//         result = `Yetti yuz`
//         break;
//     case 8:
//         result = `Sakkiz yuz`
//         break;
//     case 9:
//         result = `To'qqiz yuz`
//         break;

//     default:
//         result = ""
//         break;
// }
// switch (on) {
//     case 1:
//         result += ` o'n `
//         break;
//     case 2:
//         result += ` yigirma `
//         break;
//     case 3:
//         result += ` o'ttiz `
//         break;
//     case 4:
//         result += ` qirq `
//         break;
//     case 5:
//         result += ` ellik `
//         break;
//     case 6:
//         result += ` oltmish `
//         break;
//     case 7:
//         result += ` yetmish `
//         break;
//     case 8:
//         result += ` sakson `
//         break;
//     case 9:
//         result += ` to'qson `
//         break;

//     default:
//         result += ""
//         break;
// }
// switch (b) {
//     case 1:
//         result += ` bir`
//         break;
//     case 2:
//         result += ` ikki`
//         break;
//     case 3:
//         result += ` uch`
//         break;
//     case 4:
//         result += ` tort`
//         break;
//     case 5:
//         result += ` besh`
//         break;
//     case 6:
//         result += ` olti`
//         break;
//     case 7:
//         result += ` yetti`
//         break;
//     case 8:
//         result += ` sakkiz`
//         break;
//     case 9:
//         result += ` to'qqiz`
//         break;

//     default:
//         result += ""
//         break;
// }
// console.log(result);


// 7-masala
// let a = +prompt("Marhamat 1-sonni kiriting: ");
// let c = prompt("Marhamat operator kiriting: ");
// let b = +prompt("Marhamat 2-sonni kiriting: ");
// let total = 0;
// switch (c) {
//     case '+':
//             total = a + b
//         break;
//     case '-':
//             total = a - b
//         break;
//     case '*':
//             total = a * b
//         break;
//     case '/':
//             total = a / b
//         break;

//     default:
//         total = "Bu arifmetik operator emas"
//         break;
// }
// console.log(total);
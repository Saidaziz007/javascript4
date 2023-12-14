// for1

// let a = 1;
// let b = 10;
// let s = 0;

// for (let i = a; i <= b; i++) {
//     console.log(i);
//     s++;
// }

// console.log(s);

// for2

// let a = 1;
// let b = 10;
// let s = 0;

// for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     s++;
// }

// console.log(s);

// for3

// let sum = 8000;

// for (let i = 1; i <= 10; i++) {
//     console.log(sum * i);
// }

// for4

// let sum = 3000;

// for (let i = 12; i <= 20; i += 2) {
//     console.log((sum * i) / 10);
// }

// for5

// let a = 1;
// let b = 10;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     console.log(i);
//     sum += i;
// }

// console.log(sum);

// for6

// let a = 1;
// let b = 10;
// let mul= 1;

// for (let i = a; i <= b; i++) {
//   console.log(i);
//   mul *= i;
// }

// console.log(mul);

// for7

// let a = 1;
// let b = 10;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//   console.log(i);
//   sum += i ** 2;
// }

// console.log(sum);

// for8

// let n = 10;
// let s = 0;

// for (let i = 1; i <= n; i++) {
//     s += 1/i;
// }

// console.log(s);

// for9

// let n = 5;
// let s = 1;

// for (let i = 1; i <= n; i+= 0.1) {
//   s *= i;
// }

// console.log(s);

// for10

// let n = 5;
// let sum = 0;
// let value;

// for (let i = 1; i <= n; i++) {
//   value = 2 * i - 1;
//   sum = sum + value;
//   console.log(
//     i + " ^ 2 = " + i ** 2 + " => summasi = " + (sum - value) + " + " + value
//   );
// }

// for11

// let n = 5;
// let a = 10;
// let mul = 1;

// for (let i = 1; i <= n; i++) {
//   mul *= a;
// }
// console.log(mul);

// for12

// let n = 6;
// let s = 2;

// for (let i = 1; i <= n; i++) {
//     console.log(i, Math.pow(s, i));
// }

// for13

// let n = 10;
// let a = 3;
// let sum = 1;

// for (let i = 1; i <= n; i++) {
//   console.log(a ** i);
//   sum += a ** i;
// }
// console.log(sum);

// for14

// let n = 5;
// let sum = 0;
// let d = 1;

// for (let i = 1; i <= n; i++) {
//   d *= i;
//   sum += d;
// }
// console.log(sum);

// for15

// let N = 5;
// let K = 2;
// let sum = 0;

// let count = 0;

// for (let i = 1; i <= N; i++) {
//   count = i ** K;
//   console.log(count);
//   sum += count;
// }

// console.log("Summa", sum);

// for16

// let N = 5;
// let sum = 0;

// let count = 0;

// for (let i = 1; i <= N; i++) {
//   count = i ** i;
//   console.log(count);
//   sum += count;
// }

// console.log("Summa", sum);

// for17

// let A = 3;
// let B = 5;

// for (let i = A; i <= B; i++) {
//   for (let k = 0; k <= i - A; k++) {
//     console.log(i);
//   }
// }

// for18

// let A = 10;
// let sum = A;
// let d = 1;

// for (let i = 1; i <= A / 2; i++) {
//   if (A % i == 0) {
//     sum += i;
//     d++;
//     console.log(i);
//   }
// }

// console.log(A);
// console.log(sum);
// console.log(d);

// for19

// let A = 10;
// let d = 0;

// for (let i = 1; i <= A / 2; i++) {
//   if (A % i == 0) {
//     d++;
//   }
// }
// if (d > 1) {
//   console.log(A + " tub emas!");
// } else {
//   console.log(A + " tub!");
// }

// for20

// let A = 10;
// let d = '';

// for (let i = 1; i <= A; i++) {
//   d += i.toFixed();
//   console.log(d);
// };
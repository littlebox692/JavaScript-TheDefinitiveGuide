/**
 * JavaScript不分整数和浮点数。占64位。内置Number包装对象。
 */

/*常量
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
*/
/* 静态方法
Number.apply
Number.bind
Number.call
Number.isFinite();
Number.isInteger();
Number.isNaN();
Number.isSafeInteger();
Number.parseFloat();
Number.parseInt();
Number.toString();
*/

/* 实例方法
*/
var num1 = 1024;
var num2 = 5;
var num3 = 1.024e3;

console.log(num2.toExponential());
console.log(num2.toFixed());
console.log(num1.toLocaleString());
console.log(num2.toPrecision());
console.log(num1.toString(2));
console.log(new Number(num1).valueOf());

// 算术运算
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);



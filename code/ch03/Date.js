/**
 * 内置日期对象。
 * new Date()
 * new Date(milliseconds)
 * new Date(datestring)
 * new Date(year, month, day, hours, minutes, seconds, ms)
 */

//======================================
// 静态方法
/*
Date.UTC();
Date.now();
Date.parse();
Date.toString();
*/

//======================================
// 实例方法

var dt = new Date();

// 返回年
console.log("getFullYear: " + dt.getFullYear());
// 返回月数，注意以0开始计数。
console.log("getMonth: " + dt.getMonth());
// 返回当月日期
console.log("getDate: " + dt.getDate());
// 返回每周日期
console.log("getDay: " + dt.getDay());
// 返回小时数
console.log("getHours: " + dt.getHours());
// 返回分钟数
console.log("getMinutes: " + dt.getMinutes());
// 返回秒数
console.log("getSeconds: " + dt.getSeconds());
// 返回秒数
console.log("getMilliseconds: " + dt.getMilliseconds());


console.log("getUTCFullYear: " + dt.getUTCFullYear());
console.log("getUTCMonth: " + dt.getUTCMonth());
console.log("getUTCDate: " + dt.getUTCDate());
console.log("getUTCDay: " + dt.getUTCDay());
console.log("getUTCHours: " + dt.getUTCHours());
console.log("getUTCMinutes: " + dt.getUTCMinutes());
console.log("getUTCSeconds: " + dt.getUTCSeconds());
console.log("getUTCMilliseconds: " + dt.getUTCMilliseconds());

// 返回自1970年以来的秒数
console.log("getTime: " + dt.getTime());
//
console.log("getTimezoneOffset: " + dt.getTimezoneOffset());

//
console.log("toDateString: " + dt.toDateString());
//
console.log("toTimeString: " + dt.toTimeString());
//
console.log("toISOString: " + dt.toISOString());
//
console.log("toLocaleString: " + dt.toLocaleString());
//
console.log("toLocaleDateString: " + dt.toLocaleDateString());
//
console.log("toLocaleTimeString: " + dt.toLocaleTimeString());
//
console.log("toString: " + dt.toString());
//
console.log("toUTCString: " + dt.toUTCString());
//
console.log("toJSON: " + dt.toJSON());

//==============================================
// 可以进行计算

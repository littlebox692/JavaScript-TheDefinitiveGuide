/**
 * 
 */

var s1 = '这是一段文本';
var s2 = '这是一段文本';
var s3 = s1;

var s4 = new String('这是一段文本');
var s5 = new String('这是一段文本');

var s_int = '123456';
var s_float = '10.5'
var s_bool = 'true';

/**
 * 布尔判断
 */
console.log("===================布尔判断======================");
// 常量字符串比较，只要字符串内容相同就为真。
if (s1 === s2) {
    console.log("相同字符串比较为真");
}
if (s1 === s3) {
    console.log("相同字符串比较为真");
}
// 字符串对象比较会有所不同
if (s4 === s5) {
    console.log("相同字符串比较为真");
} else if (s4 == s5) {
    console.log("相同字符串比较为真");
} else {
    console.log("字符串对象比较行为不一样。")
}

/**
 * 类型转化
 */
console.log("===================类型转化======================");
console.log(typeof s_int.valueOf());
console.log(typeof parseInt(s_int));
console.log(typeof parseFloat(s_float));
console.log(typeof Boolean(s_bool));

/**
 * 类方法
 */
console.log("===================类方法======================");
//String.fromCharCode

/**
 * 实例方法
 */
console.log("===================实例方法======================");
console.log(s1.charAt(0));
console.log(s1.charCodeAt(0));
console.log(s1.codePointAt(0));
/*
var name = "黄正";
console.log(name.charCodeAt(0));
console.log(name.charCodeAt(1));
//name = "bighan";
for(let i = 0; i < name.length; i++) {
    console.log(name.charCodeAt(i));
}
*/
console.log(s1.concat('-', "连接字符串"));
console.log(s1.startsWith("这"));
console.log(s1.endsWith("文"));
console.log(s1.endsWith("本"));
console.log(s1.includes("文本"));
console.log(s1.indexOf("文本"));
console.log(s1.lastIndexOf("文本"));
console.log(s1.length);
console.log(s1.localeCompare("连接字符串"));
console.log(s1.normalize("NFC"));
console.log(s1.repeat(5));
console.log(s1.trim());
console.log(s1.valueOf());
console.log(s1.toString());
// 对中文没有影响
console.log(s1.toLocaleLowerCase());
console.log(s1.toLocaleUpperCase());
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());

var en = "English";
console.log(en.toLocaleLowerCase());
console.log(en.toLocaleUpperCase());
console.log(en.toLowerCase());
console.log(en.toUpperCase());

// 几个比较复杂点的方法
var s = "The quick brown fox jumps over the lazy dog.";
console.log(s.split(' '));
console.log(s.split(' ', 2));
s = "一个字符串或 正则表达式对象，标识用于分隔字符串的一个或多个字符。 如果忽略该参数，则将返回包含整个字符串的单元素数组。";
var re = /字符/;
console.log(s.split(re));

console.log(s.slice(5,6));
console.log(s.substr(5,6));
console.log(s.substring(5,6));

re = /字符/g;
console.log(s.replace(re, "ok"));
console.log(s.search(re));
console.log(s.match(re));
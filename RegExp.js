"use strict";

//const regExp1 = new RegExp("qwerty", "g");
//const regExp2 = /qwerty/g;

//console.log(regExp2.test("123qwerty567"));

//console.log("1234qwerty567".match(regExp2));

//console.log("qwerty".match(/^qwerty$/));

//console.log("qwerty".match(/^qwerty/i));

//console.log("My dog is cute".match(/\bdog\b/));

//console.log('111hfjk'.match(/^111..../))
//console.log('111hfjk'.match(/^1{3}.{4}/))

//console.log('test@test.com'.match(/^.{1,60}@.{1,30}$/))

//console.log('12345'.match(/^[0123456789]+$/))
//console.log('12345'.match(/^\d+$/))
//console.log('12345'.match(/^[0-9]+$/))

//console.log('+380-99-999-9999'.match(/^\+380-\d{2}-\d{3}-\d{4}$/))
//console.log("+380-99-999-99-99".match(/^\+380-\d{2}-\d{3}(-\d{2}){2}$/));
//console.log(
//  "+380-98-999-99-99".match(
//    /^\+380-(99|98|97|96|95|73|50|67|68|63|93)-\d{3}(-\d{2}){2}$/
//  )
//);

//console.log('Alla'.match(/^[A-Z][a-z]{1,19}$/))

//console.log('3456.456'.match(/^-?\d+\.\d+$/))

//console.log("I like dog".match(/\b(cat|dog)\b/));
//console.log("I like dogs".match(/\b(cat|dog)s?\b/));

//console.log('Anna-Maria'.match(/^[A-Z][a-z]{1,19}(\-[A-Z][a-z]{1,19})?$/))

//console.log("I say 'yes', but thinkand say 'no'".match(/'.*?'/g))

//console.log("Asdf.fghj.qwerty.".match(/^[A-Z].*?\./g));

//console.log('I bought 19 apples by 2$'.match(/\d+(?=\$)/g)) => 2

//PAROL

//console.log(
//  "Qwetty.0".match(
//    /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,16}$/
//  )
//);

//replace

const str1 = "DFgh   dfgh     fghjkh    rtyuib";
const strResult = str1.replace(/\s{2,}/g, " ");

const str2 = "Kiss my ass, Fuck you))))) ASSHOLE";
const str2Result = str2.replace(/(f+u+c+k+|a+s+s+h+o+l+e+|a+s+s+)/gi, "####");

const str3 = "DFgh   dfgh     fghjkh    rtyuib";
const str3Result = str3.split(/\s{1,}/g);

const str4 = "2025.05.05";

const str4Result = str4.split(/-|\.|\//g);

/* @flow */
var add = (a: number, b: number) => number = a + b;
console.log(add(1, 2));
console.log(add(1, '2'));
print_to_console(add(1, 2));


var print_to_console = (msg: string) => console.log(msg);

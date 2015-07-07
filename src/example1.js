/* @flow */
var hello_world = (name: string) => "hello world " + name;

console.log(hello_world('bob'));

console.log(hello_world({name: 'bob'}));

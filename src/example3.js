/* @flow */
var hello_world = (name: Name) => {
    return `hello world ${name.firstName} ${name.lastName}`;
}

type Name = {firstName: string, lastName: string};

console.log(hello_world({firstName: 'mickey', lastName: 'mouse'}));
console.log(hello_world({'first': 'mickey', 'last': 'mouse'}));

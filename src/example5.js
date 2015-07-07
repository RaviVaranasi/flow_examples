/* @flow */

import {Name} from './example4.js';

var customer : {customerName: Name, isPop?: boolean} = {
  customerName: new Name('first', 'last')
};

console.log(customer.customerName.firstName);

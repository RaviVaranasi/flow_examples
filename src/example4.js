/* @flow */

export class Name {
  firstName: string;
  lastName: string;
  addresses: Array<Address>;

  constructor(first: string, last: string){
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
  }
  addAddress(street: string, city: string, zip: string){
    this.addresses.push(new Address(street, city, zip));
  }
}

class Address {
  street: string;
  city: string;
  zip: string;

  constructor(street: string, city: string, zip: string){
    this.street = street;
    this.city = city;
    this.zip = zip;
  }
}

var name: Name = new Name('a', 'b');
var invalid_name: Name = new Name(1, 2);

name.addAddress('123 Main street', 'Dallas', '75111');
name.addAddress('123 Main street', 'Dallas', 75111);

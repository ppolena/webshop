export class User {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phone: string;
    postalCode: string;
    city: string;
    address: string;

    constructor(firstName: string, lastName: string, password: string, email: string, phone: string, postalCode: string, city: string, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.address = address;
    }
}

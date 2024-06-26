export class createUserDTO {
    email;
    name;
    age;
    city;
    zipCode;

    constructor(email: string,
        name: string,
        city: string,
        age: number,
        zipCode: string,
    ) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.city = city;
        this.zipCode = zipCode;
    }
}

export class UpdateUserDTO {
    constructor(
        public email?: string,
        public name?: string,
        public age?: number,
        public city?: string,
        public zipCode?: string
    ) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.city = city;
        this.zipCode = zipCode;
    }
}
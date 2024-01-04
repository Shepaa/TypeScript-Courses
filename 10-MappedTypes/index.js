var user = {
    firstName: "",
    lastName: "",
    educational: {
        Ukraine: "",
        Poland: ""
    },
    bday: new Date()
};
var admin = {
    firstName: "",
    lastName: "",
    educational: {
        Ukraine: "",
        Poland: ""
    },
    bday: new Date()
};
var test = {
    FIRSTNAME: "",
    LASTNAME: "",
    BDAY: new Date()
};
var obj = {
    myProperty: 42,
    anotherProperty: 'Hello, TypeScript!'
};
var descriptor = Object.getOwnPropertyDescriptor(obj, 'myProperty');
console.log(descriptor);

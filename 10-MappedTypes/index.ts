interface BaseData {
    firstName: string
    lastName: string
    bday: Date
    educational: {
        Ukraine: string
        Poland: string
    }
}

type DeepReadonly<T> = {
    readonly [K in keyof T]?: T extends object ? DeepReadonly<T[K]> : T[K]
}

type CustomReadOnly = DeepReadonly<BaseData>

const customReadOnly: CustomReadOnly = {
    firstName: "",
    lastName: "",
    educational: {
        Ukraine: "",
        Poland: ""
    },
    bday: new Date()
}


type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T extends object ? DeepRequireReadonly<T[K]> : T[K]
}
type DeepRequireReadonlyTest = DeepRequireReadonly<BaseData>

const deepRequireReadonlyTest: DeepRequireReadonlyTest = {
    firstName: "",
    lastName: "",
    educational: {
        Ukraine: "",
        Poland: ""
    },
    bday: new Date()
}


interface IData {
    firstName: string
    lastName: string
    bday: Date
}

type UpperCaseKeys<T> = {
    [K in keyof T & string as Uppercase<K>]: T[K]
}

type UpperCaseKeysTest = UpperCaseKeys<IData>

const upperCaseKeysTest: UpperCaseKeysTest = {
    FIRSTNAME: "",
    LASTNAME: "",
    BDAY: new Date()
}


type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: PropertyDescriptor;
};
const obj = {
    myProperty: 42,
    anotherProperty: 'Hello, TypeScript!'
};

type ObjectToPropertyDescriptorTest = ObjectToPropertyDescriptor<typeof obj>

const descriptorObj: ObjectToPropertyDescriptorTest = {
    myProperty: {value: 42, writable: true, enumerable: true, configurable: true},
    anotherProperty: {value: 'Hello, TypeScript!', writable: true, enumerable: true, configurable: true}
};







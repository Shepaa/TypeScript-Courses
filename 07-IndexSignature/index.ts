interface IFirstInterface {
    [key: string | number]: number
}

interface ISecondInterface {
    [key: string]: (...rest: any[]) => {}
}


interface ArrayLikeObject {
    [index: number]: any;

    length: number;
}


interface Interface {
    [key: string]: string | number | boolean

    name: string
}

interface IParent {
    [key: string]: string | number
}

interface IChild extends IParent {
    name: string
    age: number;
}


function checkKeys(obj: { [key: string]: number }, keysToCheck: string[]): boolean {
    for (const key of keysToCheck) {
        if (typeof obj[key] !== 'number') {
            return false;
        }
    }
    return true;
}
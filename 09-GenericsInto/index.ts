function filterArray<T>(array: T[], condition: (item: T) => {}): T[] {
    return array.filter(condition)
}

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = filterArray(numbers, (num: number): boolean => num < 2);
console.log(filteredNumbers)

class Stack<T> {
    private items: T[] = []

    push(item: T) {
        this.items.push(item)
    }

    pop(): T {
        return this.items.pop();
    }

    peek(): T {
        return this.items[this.items.length - 1];
    }
}

interface IArrayValue {
    key: string | number | symbol,
    value: any
}

class Dictionary<T extends IArrayValue> {
    private dictionary: T[] = []

    getDictionaryItem(): T[] {
        return this.dictionary
    }

    setDictionaryItem(item: T) {
        this.dictionary.push(item)
    }

    has(key: T): boolean {
        return this.dictionary.some(item => item.key === key.key);
    }
}

/*OPTION TASK*/
class CustomCache<T> {
    cash: T[]


    addCash(data: T) {
        this.cash.push(data)
    }

    readCache(): T[] {
        return this.cash
    }

    removeByIndex(index: number) {
        this.cash.splice(index, 1)
    }
}
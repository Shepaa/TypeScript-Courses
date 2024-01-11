type returnFuncType<T> = T extends (param: any) => infer U ? U : undefined

function func(param: number): number {
    return param
}

const x: returnFuncType<typeof func> = 42

type returnTuplesFuncType<T> = T extends (param: infer P) => infer R ? [P, R] : null

function tuplesFunc(param: number): string {
    return ''
}

const y: returnTuplesFuncType<typeof tuplesFunc> = [42, '42']


type IntersectProps<T, U> = {
    [K in Extract<keyof T, keyof U>]: T[K] extends U[K] ? T[K] : never;
};

type Obj1 = { a: number; b: string };
type Obj2 = { b: string; c: boolean };

type Result = IntersectProps<Obj1, Obj2>;


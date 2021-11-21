export function pipe<U>(...fns: Function[]) {
    return <E,>(initialValue: any): U => fns.reduce((prevValue, fn) => fn(prevValue), initialValue)
}

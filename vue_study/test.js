const foo = (a, b, c) => {
    return a + b + c;
}
const pFoo = new Proxy(foo, {
    apply: (target, that, args) => {
        const grow = args.map(x => x * 2);
        const inter = Reflect.apply(target, that, grow);
        return inter * 3;
    }
});

console.log(pFoo(1, 2, 3));   // 36, (1 * 2  + 2 * 2 + 3 * 2) * 3

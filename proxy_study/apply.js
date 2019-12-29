const createCatchProxy=(fn,cache=new Map())=>{
    return new Proxy(fn,{
        apply(target,context,args){
            console.log("args:",args);
            console.log("args:",...args);
            console.log("args:",...args);
            const argsPros=args.join("");
            if(cache.has(argsPros)){
                return cache.get(argsPros);
            }
            let result=fn(...args);
            cache.set(argsPros,result);
            return result;
        }
    })
};
const mult= (...arg)=>arg.reduce((a,b)=>a*b);

let mutlProxy=createCatchProxy(mult);
console.log(mutlProxy(2,3,4));

const squareAddtion = ((...args) => {
    return args.reduce((a, b) => {
        return a + b ** 2;
    }, 0);
});

const squareAddtionProxy = createCatchProxy(squareAddtion);

console.log(squareAddtionProxy(2, 3, 4));  // 29
squareAddtionProxy(2, 3, 4);  // 29, 输出 Using old data

const createAsyncQueueProxy = (asyncFunc) => {
    let promise = null;
    return new Proxy(asyncFunc, {
        apply(target, context, [cb, ...args]) {
            promise = Promise
                .resolve(promise)
                .then(() => new Promise(resolve => {
                    Reflect.apply(asyncFunc, this, [() => {
                        cb();
                        resolve();
                    }, ...args]);
                }));
        }
    });
};
const callback = () => console.log('Do something...');

const asyncFunc = (cb) => {
    setTimeout(cb, 1000);
};
/*asyncFunc(callback);
asyncFunc(callback);
asyncFunc(callback);*/

const timeoutProxy = createAsyncQueueProxy(asyncFunc);

timeoutProxy(callback);
timeoutProxy(callback);
timeoutProxy(callback);

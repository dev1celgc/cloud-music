// //函数签名，定义函数的参数类型
// //() => xxx 函数类型 | (): xxxx 函数返回值类型
// interface IFnCall<IRoot> {
//     <TLGC>(fn : (num: IRoot) => TLGC, age: number): TLGC //返回值
// }
// const foo: IFnCall = function (fn, age) {
//     return fn(111)
// }
// //不传入明确的调用时的泛型，会进行类型推断
// const res = foo((aaa) => {
//     return 'ddw'
// }, 18)
// //fn作为参数，函数返回值类型为TLGC，那么会推断出
// //泛型是TLGC，那么foo函数的返回值类型则和泛型保持一致，也是TLGC
// //但是一开始是不知道foo的类型，所以保持一致，可以返回fn的类型
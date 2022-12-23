// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
//
// console.log(addOne(10))
// console.log(addOne(41))
//
// console.log(addTen(10))
// console.log(addTen(41))

function urlGenerator(domain) {                 //замыкание
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const uaUrl = urlGenerator('ua')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(uaUrl('google'))
console.log(uaUrl('i'))

// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args)
//     }
// }
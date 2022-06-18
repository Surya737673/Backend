const fns=require("./index.js")
const crypto=require("crypto")

const add=fns.add
const sub=fns.sub
const mul=fns.mul
const div=fns.mul
const sin=fns.sin
const cos=fns.cos
const tan=fns.tan

console.log(add(1,2))
console.log(sub(3,2))
console.log(mul(2,2))
console.log(div(2,2))
console.log(sin(2))
console.log(cos(2))
console.log(tan(2))
console.log(crypto.randomInt(1,100))
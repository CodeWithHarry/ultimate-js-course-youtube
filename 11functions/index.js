const hello = () => {
  console.log("Hey how are you. I am toh fine yaar")
  return "hi"
}

function onePlusAvg(x, y) {
  return 1 + (x + y) / 2
}

const sum = (p, q) => {
  return p + q
}

let a = 1;
let b = 2;
let c = 3;
let v = hello();
console.log(v)
console.log("One plus Average of a and b is ", onePlusAvg(a, b))
console.log("One plus Average of b and c is ", onePlusAvg(b, c))
console.log("One plus Average of a and c is ", onePlusAvg(a, c))
console.log(sum(9, 7))
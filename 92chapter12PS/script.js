const a = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 1000 * n)
  })
}

(
  async () => {
    let text = await a("Hello")
    console.log(text)
    text = await a("World")
    console.log(text)
  }
)()

function sum(a, b, c) {
  return a + b + c
}

let x = [1, 3, 5]
console.log(sum(...x));

(async () => {
  let text = await a("I am resolving after 1 second", 1)
  console.log(text)
  text = await a("I am resolving after 4 seconds", 4)
  console.log(text)
}
)()

function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

console.log(simpleInterest(100, 5, 1))
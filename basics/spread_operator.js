// @ts-check

const { isNativeError } = require("util/types")

const personalData = {
  nickname: "KSJ",
  email: "scni00@naver.com",
}

const publicData = {
  age: 22,
}

const overrides = {
  age: 31,
}

const user = {
  ...personalData,
  ...publicData,
  ...overrides,
}

console.log(user)

const { nickname, ...rest } = user

console.log(rest)

const pets = ["dog", "cat"]
const predators = ["wolf", "cougar"]
const animals = [...pets, ...predators]

console.log(animals)

const [head, ...rest2] = [1, 2, 3]

console.log(head)
console.log(rest2)

const shouldOverride = true

const user2 = {
  ...personalData,
  ...publicData,
  ...(shouldOverride
    ? {
        email: "abc@naver.com",
      }
    : null),
}

console.log(user2)

function foo(head2, ...rest3) {
  console.log(head2)
  console.log(rest3)
}

foo(1, 2, 3, 4, 5)

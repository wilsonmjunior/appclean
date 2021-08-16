class Animal {
  #name: string

  constructor(thename: string) {
    this.#name = thename
  }
}


const foo = null ?? "Hello Mane"
const bar = '' ?? "Hello Mane"

// tupla
type PersonTuplaType = [string, number]
const person: PersonTuplaType = ['John Doe', 29]

type PersonTuplaLabelebalType = [name: string, age: number]


type topBottom = "top" | "bottom"
type leftRight = "left" | "right"

// new type
type Position = `${topBottom}-${leftRight}`

type User = {
  name: string
  document: string
  date: Date
  duration: number
}

//Omit
type Guest = Omit<User, "name">

//Keyof
type UserKeys = keyof User
const propKey: UserKeys = "name"

// Partial
function TestePartial(id: number, user: Partial<User>) {
  console.warn(user.name);
}

//Pick
type UserOne = Pick<User, "name" | "document">
const user: UserOne = {
  name: "John",
  document: "1234567890",
}

//Exclude
type one = "a" | "b" | "c"
type two = "a" | "b"
type MyType = Exclude<one, two>

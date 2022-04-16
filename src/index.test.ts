import { Greeting } from "./index"

describe("The Greeting", () => {
  it("returns 'Hello Bob' when reciebe Bob as argument", () => {
    const expected = 'Hello Bob';
    const greeting = new Greeting('Bob');
    console.clear()
    expect(greeting.result).toEqual(expected);
  })

  it("returns another name when reciebe any name as argument", () => {
    const expected = 'Hello Michael';
    const greeting = new Greeting('Michael');
    console.clear()
    expect(greeting.result).toEqual(expected);
  })

  it("returns 'Hello my friend' when not reciebe any argument", () => {
    const expected = 'Hello my friend';
    const greeting = new Greeting();
    console.clear()
    expect(greeting.result).toEqual(expected);
  })

})

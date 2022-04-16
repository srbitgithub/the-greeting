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

  it("returns the greeting in upperCase when received argument is upperCase", () => {
    const expected = 'HELLO RAMBO';
    const greeting = new Greeting('RAMBO');
    console.clear()
    expect(greeting.result).toEqual(expected);
  })

  it("returns the greeting with two names when received argument is an array with two names", () => {
    const expected = 'Hello Rocky and Rambo';
    const greeting = new Greeting(['Rocky', 'Rambo']);
    console.clear()
    expect(greeting.result).toEqual(expected);
  })

})

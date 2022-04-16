import { Greeting } from "./index"

describe("The Greeting", () => {
  it("returns 'Hello Bob' when reciebe Bob as argument", () => {
    console.clear()
    const expected = 'Hello Bob';
    const greeting = new Greeting('Bob');
    expect(greeting.result).toEqual(expected);
  })

  it("returns another name when reciebe any name as argument", () => {
    console.clear()
    const expected = 'Hello Michael';
    const greeting = new Greeting('Michael');
    expect(greeting.result).toEqual(expected);
  })

  it("returns 'Hello my friend' when not reciebe any argument", () => {
    console.clear()
    const expected = 'Hello my friend';
    const greeting = new Greeting();
    expect(greeting.result).toEqual(expected);
  })

  it("returns the greeting in upperCase when received argument is upperCase", () => {
    console.clear()
    const expected = 'HELLO RAMBO';
    const greeting = new Greeting('RAMBO');
    expect(greeting.result).toEqual(expected);
  })

  it("returns the greeting with two names when received argument is an array with two names", () => {
    console.clear()
    const expected = 'Hello, Rocky and Rambo';
    const greeting = new Greeting(['Rocky', 'Rambo']);
    expect(greeting.result).toEqual(expected);
  })

  it("returns the greeting with more then two names when received argument is an array with more than two names", () => {
    console.clear()
    const expected = 'Hello, Conan, Rocky and Rambo';
    const greeting = new Greeting(['Conan', 'Rocky', 'Rambo']);
    expect(greeting.result).toEqual(expected);
  })

  it("Separate names by lowerCase and upperCas and greeting in lowerCase or upperCase", () => {
    console.clear()
    const expected = 'Hello, Conan and Rambo. AND HELLO ROCKY';
    const greeting = new Greeting(['Conan', 'ROCKY', 'Rambo']);
    expect(greeting.result).toEqual(expected);
  })

  it("Separate names by lowerCase and upperCas and greeting in lowerCase or upperCase", () => {
    console.clear()
    const expected = 'Hello, Conan and Rambo. AND HELLO, ROCKY AND DANDIE';
    const greeting = new Greeting(['Conan', 'ROCKY', 'Rambo', 'DANDIE']);
    expect(greeting.result).toEqual(expected);
  })

  it("If item in array contain comma, then separate it in differents elements", () => {
    //console.clear()
    const expected = 'Hello, Conan, Rambo and Superman. AND HELLO, ROCKY AND DANDIE';
    const greeting = new Greeting(['Conan', 'ROCKY', 'Rambo, Superman', 'DANDIE']);
    expect(greeting.result).toEqual(expected);
  })

  it("If item in array contain comma, then separate it in differents elements", () => {
    //console.clear()
    const expected = 'Hello, Conan, Rambo and Superman. AND HELLO, ROCKY, DANDIE AND JHON';
    const greeting = new Greeting(['Conan', 'ROCKY', 'Rambo, Superman', 'DANDIE, JHON']);
    expect(greeting.result).toEqual(expected);
  })


})

import { greeting } from "./index"

describe("The Greeting", () => {
  it("returns 'That works fine'", () => {
    const expected = "That works fine";

    const result = greeting();

    expect(result).toEqual(expected);
  })
})

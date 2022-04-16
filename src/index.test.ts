import { test } from "./index"

describe("The Greeting", () => {
  it("returns 'That code works fine'", () => {
    const expected = "That code works fine";

    const result = test();

    expect(result).toEqual(expected);
  })
})

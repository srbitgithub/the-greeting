import { test } from "./index"

describe("Kata-TS", () => {
  it("returns 'That works fine'", () => {
    const expected = "That works fine";

    const result = test();

    expect(result).toEqual(expected);
  })
})

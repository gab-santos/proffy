import convertHourToMinutes from "./convertHourToMinutes";

describe("Hour to minute", () => {
  it("should convert hour to minute", () => {
    const time = "18:00";
    const expected = 1080;
    const result = convertHourToMinutes(time);

    expect(result).toBe(expected);
  });
});

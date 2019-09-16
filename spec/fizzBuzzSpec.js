describe("FizzBuzz", function () {

  beforeEach(function () {
    fizzbuzz = new FizzBuzz();
  });

  it("Should return 1 when passed 1", function () {
    expect(fizzbuzz.checkNumber(1)).toEqual(1)
  })

})
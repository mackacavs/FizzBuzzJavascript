describe("FizzBuzz", function () {
    var fizzbuzz;

  beforeEach(function () {
    fizzbuzz = new FizzBuzz();
  });

  it("Should return 1 when passed 1", function () {
    console.log("came in here");
    expect(fizzbuzz.checkNumber(1)).toEqual(1)
  })

  it("Should return Fizz when passed 3", function () {
      console.log("came in here 2");
    expect(fizzbuzz.checkNumber(3)).toEqual('Fizz')
  })

})

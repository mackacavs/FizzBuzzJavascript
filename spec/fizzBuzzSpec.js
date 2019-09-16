describe("FizzBuzz", function () {
  var fizzbuzz;

  beforeEach(function () {
    fizzbuzz = new FizzBuzz();
  });

  it("Should return 1 when passed 1", function () {
    expect(fizzbuzz.checkNumber(1)).toEqual(1)
  })

  it("Should return Fizz when passed 3", function () {
    expect(fizzbuzz.checkNumber(3)).toEqual('Fizz')
  })

  it("Should return Buzz when passed 5", function () {
    expect(fizzbuzz.checkNumber(5)).toEqual('Buzz')
  })

  it("Should return FizzBuzz when passed 15", function () {
    expect(fizzbuzz.checkNumber(15)).toEqual('FizzBuzz')
  })



})

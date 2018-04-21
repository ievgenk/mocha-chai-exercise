const fizzBuzzer = require('../fizzBuzzer')
const expect = require('chai').expect

describe('Fizz Buzz', () => {

  it('Should return an appropriate phrase or a number', () => {
    const fizzBuzz = fizzBuzzer(15)
    const buzz = fizzBuzzer(5)
    const fizz = fizzBuzzer(3)
    const num = fizzBuzzer(4)


    expect(function () {
      fizzBuzzer('word')
    }).to.throw()
    expect(num).to.equal(4)
    expect(fizz).to.equal('fizz')
    expect(buzz).to.equal('buzz')
    expect(fizzBuzz).to.equal('fizz-buzz')
  })

})
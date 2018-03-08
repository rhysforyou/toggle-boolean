require('./index.js')

describe('boolean-toggle package', function() {
  it("defines a 'toggle' function on the Boolean prototype", function() {
    expect(Boolean.prototype.toggle).not.toBeNull()
  })

  describe('toggle function', function() {
    describe('with a value of `true`', function() {
      it('returns `false`', function() {
        expect(true.toggle()).toBe(false)
      })
    })

    describe('with a value of `false`', function() {
      it('returns `true`', function() {
        expect(false.toggle()).toBe(true)
      })
    })
  })
})

var expected, actual, subject;

describe('window', function() {

  beforeEach(function() {
    subject = window;
  });

  describe('app', function() {

    beforeEach(function() {
      subject = subject.app;
    });

    describe('#addStuff', function() {

      describe('numbers', function() {

        beforeEach(function() {
          actual = subject.addStuff(1, 2, 3, 4);
        });

        it('should add all numbers', function() {
          expect(actual).toBe(10);
        });

        it('should not subtract all numbers', function() {
          expect(actual).not.toBe(-8);
        });

      });

      describe('strings', function() {

        beforeEach(function() {
          actual = subject.addStuff('Hello Jasmine', '!', '!', '!');
        });

        it('should append all strings', function() {
          expect(actual).toBe('Hello Jasmine!!!');
        });

      });

    });
  });
});

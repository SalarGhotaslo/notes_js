var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error('Assertion failed: ' + assertionToCheck + ' is not truthy');
    }else {
      console.log('Great work Salar!!!!');
    }
  },
};

function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
};

testCircleRadiusDefaultsTo10();

describe('Circle', function () {
    it('works out radius', () => {
        let circle = new Circle();
        isEqual(circle.radius, 10);
      });
  });

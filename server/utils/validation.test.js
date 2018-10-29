const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    var numbers = 123123;
    var spaces = '    ';
    var res = isRealString(numbers);
    expect(res).toBe(false);
  });


  it('should reject space strings', () => {
    var spaces = '    ';
    var res = isRealString(spaces);
    expect(res).toBe(false);
  });

  it('should accept valid strings', () => {
    var string = '  faisejf1r '
    var res = isRealString(string);
    expect(res).toBe(true);
  });


});

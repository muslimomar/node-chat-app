const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate correct message object', () => {
    var from = 'jason';
    var text = 'Hey, this is jason!';
    var message = generateMessage(from,text);

    expect(message).toMatchObject({from,text});
    expect(typeof message.createdAt).toBe('number');

  });

});

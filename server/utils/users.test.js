const expect = require('expect');

const {Users} = require('./users');



describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id:'1',
      name:'Mike',
      room: 'Node Course'
    },{
      id:'2',
      name:'John',
      room: 'React Course'
    },{
      id:'3',
      name:'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    users = new Users();
    var user = {
      id:'123',
      name: 'rakesh',
      room: 'Ownagie'
    };

    var resUser = users.addUser(user.id,user.name,user.room);

    expect(users.users).toMatchObject([user]);
  });

  it('should return names for node course', () => {
    var usersList = users.getUserList('Node Course');
    expect(usersList).toMatchObject(['Mike','Julie']);
  });

  it('should return names for react course', () => {
    var usersList = users.getUserList('React Course');
    expect(usersList).toMatchObject(['John']);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2)
  });

  it('should not remove a user', () => {
    var userId = '1241312';
    var user = users.removeUser(userId);
    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '12435245';
    var user = users.getUser(userId);
    expect(user).toBeFalsy();
  });

});

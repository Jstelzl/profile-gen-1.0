const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('can set office number via constructor argument', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'example@example.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return \'Manager\'', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'example@example.com', 100);
    expect(e.getRole()).toBe(testValue);
});

test('can get office number via getOffice()', () => {
    const testValue = 100;
    const e = new Manager('Foo', '1', 'example@example.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
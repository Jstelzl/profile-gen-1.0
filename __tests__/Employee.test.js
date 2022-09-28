const Employee = require('../lib/Employee');

// Tests for employee

test('Can initiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('Can set name via contructor arguments', () => {
    const name = 'Alice';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('Can set id via contructor arguments', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('Can set email via constructor argument', () => {
    const testValue = 'test@test.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('Can get name via getName()', () => {
    const testValue = 'Alice';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('can get id via getId()', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.getId()).toBe(testValue);
});

test('can get email via getEmail()', () => {
    const testValue = 'example@example.com';
    const e = new Employee('foo', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee('Alice', 1, "example@example.com");
    expect(e.getRole()).toBe(testValue);
});
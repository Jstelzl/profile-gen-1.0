const Intern = require('../lib/Intern');

test('can set University via constuctor', () => {
    const testValue = 'MIT';
    const e = new Intern('Foo', '1', "example@example.com", testValue);
    expect(e.university).toBe(testValue);
});

test('getRole() should return \"Intern\"', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'example@example.com', 'MIT');
    expect(e.getRole()).toBe(testValue);
});

test('can get University via getUniversity()', () => {
    const testValue = 'MIT';
    const e = new Intern('Foo', 1, 'example@example.com', testValue);
    expect(e.getUniversity()).toBe(testValue);
});
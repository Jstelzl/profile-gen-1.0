const Engineer = require("../lib/Engineer");

// tests for engineer
test('can set Github account via constructor', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Foo', 1, 'example@example.com', testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() should return \'Engineer\'', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, "example@example.com", 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
});

test('can get Github username via getGitHub()', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Foo', 1, 'example@example.com', testValue);
});
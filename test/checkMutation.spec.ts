import { sum } from '../src/checkMutation';

describe('checkMutation', () => {
  test('should correctly sum positive numbers', () => {
    console.log('\n\nshould correctly sum positive numbers\n\n');
    expect(sum(2, 5)).toBe(7);
  });

  test('should correctly sum zeros', () => {
    console.log('\n\nshould correctly sum zeros\n\n');
    expect(sum(0, 0)).toBe(0);
  });
});

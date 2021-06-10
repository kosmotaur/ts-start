import subject from './index';

describe('main test', () => {
  it('has all the answers', () => {
    expect(subject()).toBe(42);
  });
});

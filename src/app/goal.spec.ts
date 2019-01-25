import { Goal } from './goal';

describe('Goal', () => {
  it('should create an instance', () => {
    expect(new Goal(2,"ok","ibijumba",new Date(2028,3,14))).toBeTruthy();
  });
});

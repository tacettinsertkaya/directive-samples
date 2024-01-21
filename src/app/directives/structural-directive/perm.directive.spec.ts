import { PermDirective } from './perm.directive';

describe('PermDirective', () => {
  it('should create an instance', () => {
    const directive = new PermDirective('admin');
    expect(directive).toBeTruthy();
  });
});

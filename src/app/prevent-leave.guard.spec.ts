import { TestBed } from '@angular/core/testing';

import { PreventLeaveGuard } from './prevent-leave.guard';

describe('PreventLeaveGuard', () => {
  let guard: PreventLeaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventLeaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

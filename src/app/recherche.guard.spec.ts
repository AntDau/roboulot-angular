import { TestBed } from '@angular/core/testing';

import { RechercheGuard } from './recherche.guard';

describe('RechercheGuard', () => {
  let guard: RechercheGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RechercheGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

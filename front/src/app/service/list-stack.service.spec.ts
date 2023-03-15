import { TestBed } from '@angular/core/testing';

import { ListStackService } from './list-stack.service';

describe('ListStackService', () => {
  let service: ListStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

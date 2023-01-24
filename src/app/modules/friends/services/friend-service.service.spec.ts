import { TestBed } from '@angular/core/testing';

import { FriendServiceService } from './friends.service';

describe('FriendServiceService', () => {
  let service: FriendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

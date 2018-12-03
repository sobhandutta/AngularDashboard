import { TestBed, inject } from '@angular/core/testing';

import { DataflowService } from './dataflow.service';

describe('DataflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataflowService]
    });
  });

  it('should be created', inject([DataflowService], (service: DataflowService) => {
    expect(service).toBeTruthy();
  }));
});

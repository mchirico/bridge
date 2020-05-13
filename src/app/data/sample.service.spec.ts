import {TestBed} from '@angular/core/testing';

import {SampleService} from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
    const name = service.getData(0).name;
    expect(name).toMatch('bob');

  });
});

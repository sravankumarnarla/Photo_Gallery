import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PhotoService);
    imports: [ HttpClientTestingModule ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

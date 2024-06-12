import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PhotoGalleryComponent } from './photo-gallery.component';
import { PhotoService } from '../../services/photo.service';
import { of } from 'rxjs';
import { Photo } from '../../models/photo.model';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;
  let photoService: PhotoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PhotoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    photoService = TestBed.inject(PhotoService);

    spyOn(photoService, 'getPhotos').and.returnValue(of([
      { albumId: 1, id: 1, thumbnailUrl: 'https://via.placeholder.com/150', title: 'Photo 1', url: 'https://via.placeholder.com/600/92c952' },
      { albumId: 1, id: 2, thumbnailUrl: 'https://via.placeholder.com/150', title: 'Photo 2', url: 'https://via.placeholder.com/600/771796' }
    ] as Photo[]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display photos', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.photo-card').length).toBe(2);
    expect(compiled.querySelector('.photo-card h2').textContent).toContain('Photo 1');
  });
});
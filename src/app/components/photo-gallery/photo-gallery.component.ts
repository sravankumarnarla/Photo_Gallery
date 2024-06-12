import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(data => {
      this.photos = data.slice(0, 50); // Limiting to 50 photos for better performance
    });
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = [
    {
      id: 1,
      src: '../../../assets/alberta-2297204_1280.jpg',
      title: 'alberta',
      width: 550,
    },
    {
      id: 2,
      src: '../../../assets/forest-3622519_1280.jpg',
      title: 'forest',
      width: 550,
    },
    {
      id: 3,
      src: '../../../assets/mountains-100367_1280.jpg',
      title: 'mountains1',
      width: 550,
    },
    {
      id: 4,
      src: '../../../assets/mountains-1587287_1280.jpg',
      title: 'mountains2',
      width: 550,
    },
    {
      id: 5,
      src: '../../../assets/nature-3082832_1280.jpg',
      title: 'nature',
      width: 550,
    },
    {
      id: 6,
      src: '../../../assets/ocean-1867285_1280.jpg',
      title: 'oceans',
      width: 550,
    },
    {
      id: 7,
      src: '../../../assets/river-219972_1280.jpg',
      title: 'river',
      width: 550,
    },
    {
      id: 8,
      src: '../../../assets/tree-838667_1280.jpg',
      title: 'tree',
      width: 550,
    },
  ];

  selectedImage: any;
  slideshowInterval: any;
  playPressed: boolean = false;
  stopPressed: boolean = true;

  ngOnInit(): void {
    this.selectedImage = this.images[0];
  }

  selectImage(image: any) {
    this.selectedImage = image;
  }

  previousImage() {
    if (this.selectedImage) {
      const currentIndex = this.images.findIndex(
        (image) => image.id === this.selectedImage.id
      );

      if (currentIndex > 0) {
        this.selectedImage = this.images[currentIndex - 1];
      } else {
        this.selectedImage = this.images[7];
      }
    }
  }

  nextImage() {
    if (this.selectedImage) {
      const currentIndex = this.images.findIndex(
        (image) => image.id === this.selectedImage.id
      );
      if (currentIndex < 7) {
        this.selectedImage = this.images[currentIndex + 1];
      } else {
        this.selectedImage = this.images[0];
      }
    }
  }

  increaseSize() {
    if (this.selectedImage && this.selectedImage.width < 800) {
      this.selectedImage.width += 10;
    }
  }

  decreaseSize() {
    if (this.selectedImage && this.selectedImage.width > 90) {
      this.selectedImage.width -= 10;
    }
  }

  playSlideshow() {
    this.playPressed = true;
    this.stopPressed = false;

    this.slideshowInterval = setInterval(() => {
      this.nextImage();
    }, 2000);
  }
  
  stopSlideshow() {
    this.playPressed = false;
    this.stopPressed = true;
    clearInterval(this.slideshowInterval);
  }
}

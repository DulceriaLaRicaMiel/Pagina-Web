import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
    images = [
    {
      src: '/assets/Catalogo.png',
      alt: 'Imagen 1',
      title: 'Diseños del Catálogo Digital',
      related: [
        { src: '/assets/Catalogo 2.png', alt: 'Detalle 1', title: 'Rediseños del Indice' },
        { src: '/assets/Catalogo 4.png', alt: 'Detalle 2', title: 'Contenido' },
        { src: '/assets/Catalogo 3.png', alt: 'Detalle 3', title: 'Contactanos' }
      ]
    },
    {
      src: '/assets/dulceria.jpg',
      alt: 'Imagen 2',
      title: 'Fotos de la Dulcería',
      related: [
        { src: '/assets/dulceria 1.jpg', alt: 'Dulceria 1', title: '' },
        { src: '/assets/dulceria 2.jpg', alt: 'Dulceria 2', title: '' },
        { src: '/assets/dulceria 3.jpg', alt: 'Dulceria 3', title: '' },
        { src: '/assets/dulceria 4.jpg', alt: 'Dulceria 4', title: '' },
        { src: '/assets/dulceria 5.jpg', alt: 'Dulceria 5', title: '' },
        { src: '/assets/dulceria 6.jpg', alt: 'Dulceria 6', title: '' },
        { src: '/assets/dulceria 7.jpg', alt: 'Dulceria 7', title: '' },
        { src: '/assets/dulceria 8.jpg', alt: 'Dulceria 8', title: '' },
        { src: '/assets/dulceria 9.jpg', alt: 'Dulceria 9', title: '' },
        { src: '/assets/dulceria 10.jpg', alt: 'Dulceria 10', title: '' },
        { src: '/assets/dulceria 11.jpg', alt: 'Dulceria 11', title: '' },
        { src: '/assets/dulceria 12.jpg', alt: 'Dulceria 12', title: '' },
        { src: '/assets/dulceria 13.jpg', alt: 'Dulceria 13', title: '' },
        { src: '/assets/dulceria 14.jpg', alt: 'Dulceria 14', title: '' },
        { src: '/assets/dulceria 15.jpg', alt: 'Dulceria 15', title: '' },
        { src: '/assets/dulceria 16.jpg', alt: 'Dulceria 16', title: '' },
        { src: '/assets/dulceria 17.jpg', alt: 'Dulceria 17', title: '' },
        { src: '/assets/dulceria 18.jpg', alt: 'Dulceria 18', title: '' },
        { src: '/assets/dulceria 19.jpg', alt: 'Dulceria 19', title: '' },
        { src: '/assets/dulceria 20.jpg', alt: 'Dulceria 20', title: '' },
        { src: '/assets/dulceria 21.jpg', alt: 'Dulceria 21', title: '' },
        { src: '/assets/dulceria 22.jpg', alt: 'Dulceria 22', title: '' },
        { src: '/assets/dulceria 23.jpg', alt: 'Dulceria 23', title: '' },
        { src: '/assets/dulceria 24.jpg', alt: 'Dulceria 24', title: '' },
        { src: '/assets/dulceria 25.jpg', alt: 'Dulceria 25', title: '' },
        { src: '/assets/dulceria 26.jpg', alt: 'Dulceria 26', title: '' },
      ]
    },
    {
      src: '/assets/Mascota 1.jpg',
      alt: 'Imagen 3',
      title: 'Nuestra Mascota',
      related: [
        { src: '/assets/Mascota 2.jpg', alt: 'Mascota 2', title: '' },
        { src: '/assets/Mascota 4.jpg', alt: 'Mascota 4', title: '' },
        { src: '/assets/Mascota 5.jpg', alt: 'Mascota 5', title: '' },
        { src: '/assets/Mascota 6.jpg', alt: 'Mascota 6', title: '' },
        { src: '/assets/Mascota 7.jpg', alt: 'Mascota 7', title: '' },
        { src: '/assets/Mascota 3.jpg', alt: 'Mascota 3', title: '' }
      ]
    },
  ];

  modalOpen = false;
  currentImages: any[] = [];
  activeImageIndex = 0;
  zoomLevel = 1;
  offsetX = 0;
  offsetY = 0;
  isDragging = false;
  startX = 0;
  startY = 0;

  openModal(image: any) {
    this.currentImages = [image, ...image.related];
    this.activeImageIndex = 0;
    this.resetZoom();
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalOpen = false;
    document.body.style.overflow = 'auto';
  }

  setActiveImage(index: number) {
    this.activeImageIndex = index;
    this.resetZoom();
    this.scrollToImage(index);
  }

  prevImage() {
    this.activeImageIndex = (this.activeImageIndex - 1 + this.currentImages.length) % this.currentImages.length;
    this.resetZoom();
    this.scrollToImage(this.activeImageIndex);
  }

  nextImage() {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.currentImages.length;
    this.resetZoom();
    this.scrollToImage(this.activeImageIndex);
  }

  scrollToImage(index: number) {
    setTimeout(() => {
      const container = document.querySelector('.image-scroll-container');
      const image = document.querySelectorAll('.image-container')[index];
      if (container && image) {
        image.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }, 50);
  }

  zoomIn() {
    this.zoomLevel += 0.2;
  }

  zoomOut() {
    if (this.zoomLevel > 0.5) {
      this.zoomLevel -= 0.2;
    }
  }

  resetZoom() {
    this.zoomLevel = 1;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  onZoom(event: WheelEvent) {
    event.preventDefault();
    if (event.deltaY < 0) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX - this.offsetX;
    this.startY = event.clientY - this.offsetY;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;
    this.offsetX = event.clientX - this.startX;
    this.offsetY = event.clientY - this.startY;
  }

  endDrag() {
    this.isDragging = false;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeModal();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft() {
    if (this.modalOpen) this.prevImage();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight() {
    if (this.modalOpen) this.nextImage();
  }
}

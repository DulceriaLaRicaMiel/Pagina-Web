import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-headermenu',
  standalone: false,
  templateUrl: './headermenu.component.html',
  styleUrl: './headermenu.component.css'
})
export class HeadermenuComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }
}

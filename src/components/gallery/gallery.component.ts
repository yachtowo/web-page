import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  readonly images = [
    '',
    '',
    '',
    '',
    '',
  ];

  private readonly selected = signal<string | null>(null);

  opened = this.selected.asReadonly();

  open(src: string) {
    console.log('x')
    this.selected.set(src);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.selected.set(null);
    document.body.style.overflow = '';
  }
}

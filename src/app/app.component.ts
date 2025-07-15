import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../components/header/header.component';
import {HomeComponent} from '../components/home/home.component';
import {GalleryComponent} from '../components/gallery/gallery.component';
import {ServicesComponent} from '../components/services/services.component';
import {ContactComponent} from '../components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, GalleryComponent, ServicesComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

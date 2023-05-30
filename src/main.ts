import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.html'
    ,
    styleUrls:['./global_styles.css']
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

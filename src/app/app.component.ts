import { Component , OnInit } from '@angular/core';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'collectionnist';
  
    isCollapsed: boolean = true;
    constructor() { }
    ngOnInit() {
    }
    display = false;
    onPress() {
      //To toggle the component
      this.display = !this.display;
    };
    faEnvelope = faEnvelope;
  faHeart = faHeart;
   }
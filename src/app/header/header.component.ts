import { Component, OnInit } from '@angular/core';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  display = false;
  onPress() {
    //To toggle the component
    this.display = !this.display;
  };
  faEnvelope = faEnvelope;
  faHeart = faHeart;


}
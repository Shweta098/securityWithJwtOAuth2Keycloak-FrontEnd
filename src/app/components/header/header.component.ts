import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = new User();

  constructor() {
    
  }

  ngOnInit() {
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
  }

}

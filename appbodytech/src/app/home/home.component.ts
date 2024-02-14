import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
    constructor(
      private router: Router,
      private homeService: HomeService,
    ) { }
  
    ngOnInit(): void {
    }
  
  product() {
    return this.homeService.confirmProduct;
  };
}

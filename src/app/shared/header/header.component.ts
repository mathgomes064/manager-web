import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header-service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userData: any

  constructor(
    private router: Router,
    private headerService: HeaderService
  ){}

  ngOnInit() {
    this.headerService.getUsers().subscribe(
      res => {
        this.userData = res
      }
    )
  }
  
  public deslogar(){
    localStorage.clear()
    return this.router.navigate(['/login'])
  }

}

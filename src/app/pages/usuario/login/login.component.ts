import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router
  ){}

  redirectToComponent(route: string) {
    this.router.navigate([route]);
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

}

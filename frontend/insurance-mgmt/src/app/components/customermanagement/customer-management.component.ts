import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent {
  constructor(private router: Router) {}
  navigateToSomewhere() {
    this.router.navigate(['/customermanagement']);
    
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    // this.router.navigate(['subhash', '143']);
  }

  productSelected(product: number) {
    this.router.navigate(['/subhash', product]);
  }
}

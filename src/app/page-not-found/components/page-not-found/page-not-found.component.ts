import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'eCommerce-page-not-found',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {}

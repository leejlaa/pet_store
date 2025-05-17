import { afterNextRender, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStore } from '../stores/product.store'; 
// Ensure ProductStore is correctly imported and typed
// Add proper type annotations for ProductStore methods
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  readonly productStore = inject(ProductStore); // ✅ CORRECT

  constructor() {
    afterNextRender(() => {
      this.productStore.loadProducts();
    });
  }
}

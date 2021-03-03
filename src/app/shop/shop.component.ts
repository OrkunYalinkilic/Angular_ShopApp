import { Component } from '@angular/core';
import { Category } from '../modell/category.model';
import { CategoryRepository } from '../modell/category.repository';
import { Product } from '../modell/product.model';
import { ProductRepository } from '../modell/product.repository';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
})
export class ShopComponent {

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository) { }

  get products(): Product[] {
    return this.productRepository.getProducts();
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

}

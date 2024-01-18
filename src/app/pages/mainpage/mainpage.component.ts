import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css',
})
export class MainpageComponent implements OnInit {
  private _productService = inject(ProductService);

  products: Product[] = [];
  productsCopy: Product[] = [];

  constructor() { }

  ngOnInit(): void { 
    this.getData()
  }

  filter(e: any) {
    const input = e.target as HTMLInputElement;
    const text: string = input.value;
    this.products = this.productsCopy.filter(({title}: Product) => {
      return title.toLocaleLowerCase().includes(text.toLocaleLowerCase());
    })
  }

  getData() {
    this._productService.findAll().subscribe({
      next: (data: Product[]) => {
        this.productsCopy = data;
        this.products = [...this.productsCopy];
      }
    });
  }
}

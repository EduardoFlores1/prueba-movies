import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _httpClient = inject(HttpClient);

  private readonly apiURL: string = `${environment.apiUrl}/products`;

  constructor() { }

  findAll(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.apiURL}?limit=10`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'Products';

  constructor(private apiService: ApiService) {}

  getAll(): Observable<IProduct[]> {
    return this.apiService.Get<IProduct[]>(this.apiUrl);
  }

  getById(id:string): Observable<IProduct> {
    return this.apiService.Get<IProduct>(`${this.apiUrl}/${id}`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.apiService.Post<IProduct>(this.apiUrl, product);
  }

  update(product: IProduct): Observable<IProduct> {
    return this.apiService.Put<IProduct>(`${this.apiUrl}/${product.id}`, product);
  }

  delete(id: string): Observable<void> {
    return this.apiService.Delete<void>(`${this.apiUrl}/${id}`);
  }
}

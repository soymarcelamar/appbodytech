import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductRequest } from '../home/productRequest';
import { ProductBasic } from '../home/ProductBasic';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http:HttpClient ) { }

  products(_product: ProductRequest): Observable<ProductBasic> {
    return this.http.get<ProductBasic>('././data.json').pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error: ', error.error);
    }
    else {
      console.error('Status code: ', error.status, ' Error: ', error.error);
    }
    return throwError(() => new Error('Try Again'));
  }
    
  confirmCredential() {
    console.log(this.products);
  }
}
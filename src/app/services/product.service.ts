import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponseModel } from '../models/interfaces/api-response';
import { Product } from '../models/classes/product-class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<IAPIResponseModel>("https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts")
  }

  getProduct(id:number){
    return this.http.get<IAPIResponseModel>("https://freeapi.miniprojectideas.com/api/amazon/GetProductById?id="+id)
  }

  updateProduct(product:Product){
    return this.http.post<IAPIResponseModel>("https://freeapi.miniprojectideas.com/api/amazon/UpdateProduct", product)
  }

  deleteProduct(id:number){
    return this.http.delete<IAPIResponseModel>("https://freeapi.miniprojectideas.com/api/amazon/DeleteProductById?id="+id)
  }

  createProduct(product:Product){
    return this.http.post<IAPIResponseModel>("https://freeapi.miniprojectideas.com/api/amazon/CreateProduct", product)
  }
}

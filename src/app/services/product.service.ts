import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponseModel } from '../models/interfaces/api-response';
import { Product } from '../models/classes/product-class';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<IAPIResponseModel>(Constant.API_URL+Constant.PRODUCT_API_METHOD.GET_ALL_PRODUCT)
  }

  getProduct(id:number){
    return this.http.get<IAPIResponseModel>(Constant.API_URL+Constant.PRODUCT_API_METHOD.GET_PRODUCT+id)
  }

  updateProduct(product:Product){
    return this.http.post<IAPIResponseModel>(Constant.API_URL+Constant.PRODUCT_API_METHOD.UPDATE_PRODUCT, product)
  }

  deleteProduct(id:number){
    return this.http.delete<IAPIResponseModel>(Constant.API_URL+Constant.PRODUCT_API_METHOD.DELETE_PRODUCT+id)
  }

  createProduct(product:Product){
    return this.http.post<IAPIResponseModel>(Constant.API_URL+Constant.PRODUCT_API_METHOD.CREATE_PRODUCT, product)
  }
}

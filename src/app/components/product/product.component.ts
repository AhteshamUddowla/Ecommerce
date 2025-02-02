import { Component, inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../models/classes/product-class';
import { IAPIResponseModel } from '../../models/interfaces/api-response';
import { ProductService } from '../../services/product.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-product',
  imports: [DatePipe, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product: Product = new Product()
  productList: Product[] = []

  productService = inject(ProductService)
  route = inject(ActivatedRoute)
  router = inject(Router)

  @ViewChild('productModal') productModal!: ElementRef; 

  ngOnInit() {
    this.loadProduct()
  }

  loadProduct(){
    this.productService.getAllProducts().subscribe((res:IAPIResponseModel)=>{
      if(res.result){
        this.productList = res.data;
      }
      else{
        alert(res.message)
      }
    })
  }

  onDetailsClick(id: number){
    this.router.navigate(['/product', id])
  }

  openModal() {
    if (this.productModal) {
      const modal = new Modal(this.productModal.nativeElement); 
      modal.show(); 
    }
  }

   onSaveProduct(){
      this.productService.createProduct(this.product).subscribe((res:IAPIResponseModel)=>{
        if(res.result){ 
          const modalInstance = bootstrap.Modal.getInstance(this.productModal.nativeElement);
          modalInstance?.hide();
          
          alert("Product saved successfully")
          this.loadProduct()
        }
        else{
          alert(res.message)
        }
      })
    }
}

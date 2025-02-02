import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IAPIResponseModel } from '../../models/interfaces/api-response';
import { Product } from '../../models/classes/product-class';
import { Modal } from 'bootstrap';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent {
  product: Product = new Product()
  route = inject(ActivatedRoute)
  productService = inject(ProductService)

  @ViewChild('productModal') productModal!: ElementRef; 

  ngOnInit(){
    // console.log(this.route.snapshot.params['id'])
    const id=this.route.snapshot.params['id']
    this.productService.getProduct(id).subscribe((res:IAPIResponseModel)=>{
      if(res.result){
        this.product = res.data
      }
      else{
        alert(res.message)
      }
    })
  }

  openModal() {
    if (this.productModal) {
      const modal = new Modal(this.productModal.nativeElement); 
      modal.show(); 
    }
  }

  onSaveProduct(){
    this.productService.updateProduct(this.product).subscribe((res:IAPIResponseModel)=>{
      if(res.result){
        const modalInstance = bootstrap.Modal.getInstance(this.productModal.nativeElement);
        modalInstance?.hide();

        alert("Product updated successfully")
      }
      else{
        alert(res.message)
      }
    })
  }

  onDeleteProduct(){
    const isDelete = confirm("Are you sure you want to delete?")

    if(isDelete){
      this.productService.deleteProduct(this.product.productId).subscribe((res:IAPIResponseModel)=>{
        console.log(res.result)
        if(res.result){
          alert(`Product ${res.data.productName} deleted successfully`)
        }
        else{
          alert(res.message)
        }
      })
    }
  }
    
}

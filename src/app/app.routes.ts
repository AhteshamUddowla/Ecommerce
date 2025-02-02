import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductComponent,
        title: 'Products'
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent,
        title: "Product"
    }
];

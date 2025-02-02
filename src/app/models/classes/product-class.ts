export class Product{
    productId: number;
    productSku: string;
    productName: string;
    productPrice: number;
    productShortName: string;
    productDescription: string;
    createdDate: Date;
    deliveryTimeSpan: string;
    categoryId: number;
    productImageUrl: string;

    constructor() {
        this.productId = 0,
        this.productSku = "",
        this.productName = "",
        this.productPrice = 0,
        this.productShortName = "",
        this.productDescription = "",
        this.createdDate = new Date(),
        this.deliveryTimeSpan = "",
        this.categoryId = 0,
        this.productImageUrl = ""
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { ProductDetails } from './product-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }
  readonly baseURL = 'https://74ab-138-75-155-224.ngrok.io';


  formData: ProductDetails = new ProductDetails();
  list !: ProductDetails[];

  public cartItemList : ProductDetails[]=[];
  public productList = new BehaviorSubject<any>([]);

  postProductDetails(){
    return this.http.post(this.baseURL+'/api/inventory',this.formData);
  }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  emptyCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.price;
    })
    return grandTotal;
  }

  // patchProductDetails(){
  //   const body = {
  //     _id:this.formData.id,
  //     itemName:this.formData.title,
  //     quantity:this.formData.quantity
  //   };
  //   return this.http.patch(this.baseURL+'api/inventory/'+this.formData.id,body);
  // }

  refreshList(){
    return this.http.get<ProductDetails[]>(this.baseURL+'/api/energygeneration');

    return of([
      {
          "id": 1,
          "price": 197.70,
          "year": 2005,
          "region": "England",
          "wind2": 607.6,
          "waveAndTidal": 271.9,
          "solarPv": 360.9,
          "hydro": 319.8,
          "landfillGas": 799.5,
          "otherBioEnergy": 201.7,
          "total": 1055.2,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 2,
          "price": 57.57,
          "year": 2006,
          "region": "Scotland",
          "wind2": 1502.3,
          "waveAndTidal": 1435.8,
          "solarPv": 1654.0,
          "hydro": 982.0,
          "landfillGas": 578.4,
          "otherBioEnergy": 1023.2,
          "total": 1339.2,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 3,
          "price": 176.94,
          "year": 2006,
          "region": "Northern Ireland",
          "wind2": 1630.6,
          "waveAndTidal": 1215.4,
          "solarPv": 921.2,
          "hydro": 776.8,
          "landfillGas": 1588.8,
          "otherBioEnergy": 852.1,
          "total": 1692.5,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 4,
          "price": 171.05,
          "year": 2004,
          "region": "Yorkshire and the Humber",
          "wind2": 1177.3,
          "waveAndTidal": 640.0,
          "solarPv": 1217.0,
          "hydro": 1514.9,
          "landfillGas": 1715.4,
          "otherBioEnergy": 1937.6,
          "total": 967.1,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 5,
          "price": 56.74,
          "year": 2003,
          "region": "England",
          "wind2": 1813.9,
          "waveAndTidal": 129.9,
          "solarPv": 947.3,
          "hydro": 163.0,
          "landfillGas": 1694.8,
          "otherBioEnergy": 1254.4,
          "total": 496.5,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 6,
          "price": 11.12,
          "year": 2005,
          "region": "Scotland",
          "wind2": 1868.4,
          "waveAndTidal": 588.5,
          "solarPv": 58.3,
          "hydro": 557.2,
          "landfillGas": 478.7,
          "otherBioEnergy": 1392.2,
          "total": 1350.7,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 7,
          "price": 158.40,
          "year": 2004,
          "region": "Scotland",
          "wind2": 509.2,
          "waveAndTidal": 1344.7,
          "solarPv": 1756.4,
          "hydro": 278.7,
          "landfillGas": 620.7,
          "otherBioEnergy": 862.2,
          "total": 218.8,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 8,
          "price": 13.90,
          "year": 2005,
          "region": "Northern Ireland",
          "wind2": 56.0,
          "waveAndTidal": 771.8,
          "solarPv": 1436.0,
          "hydro": 1914.8,
          "landfillGas": 809.0,
          "otherBioEnergy": 1500.6,
          "total": 268.1,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 9,
          "price": 75.81,
          "year": 2005,
          "region": "England",
          "wind2": 355.6,
          "waveAndTidal": 1581.3,
          "solarPv": 618.0,
          "hydro": 1292.9,
          "landfillGas": 1377.1,
          "otherBioEnergy": 588.8,
          "total": 581.7,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      },
      {
          "id": 10,
          "price": 65.97,
          "year": 2005,
          "region": "England",
          "wind2": 586.8,
          "waveAndTidal": 1383.1,
          "solarPv": 1836.4,
          "hydro": 385.9,
          "landfillGas": 1494.5,
          "otherBioEnergy": 469.2,
          "total": 373.5,
          "image": "https://2776-138-75-155-224.ngrok.io/images/energy.jpeg"
      }
  ]);
  }

}

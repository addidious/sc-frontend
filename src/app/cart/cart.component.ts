import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ProductDetails } from '../shared/product-details.model';
import { ProductDetailsService } from '../shared/product-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  displayedColumns: string[] = ['product', 'name', 'price', 'remove-item'];
  dataSource:any=[];
  grandTotal:number=0;

  @ViewChild(MatTable) table: MatTable<ProductDetails>;

  constructor(private service:ProductDetailsService) { }

  ngOnInit(): void {
    this.service.getProducts()
                .subscribe(res=>{
                  this.dataSource=res;
                  this.grandTotal=this.service.getTotalPrice();
                })
  }

  emptyCart(){
    this.service.emptyCart();
    this.table.renderRows();
  }

  checkoutCart(){
    console.log("Items have been checkout. Please proceed to make payment.")
  }

  removeItem(item:any){
    this.service.removeCartItem(item);
    this.table.renderRows();
  }
}

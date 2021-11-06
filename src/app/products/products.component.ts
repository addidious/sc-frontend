import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { ProductDetails } from '../shared/product-details.model';
import { ProductDetailsService } from '../shared/product-details.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  filter: FormControl;
  filter$: Observable<string>;

  productList:ProductDetails[];
  filteredProducts$: Observable<ProductDetails>;

  constructor(private service: ProductDetailsService) {
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges;
    // this.filteredProducts$ = combineLatest(this.filteredProducts$, this.filter$).pipe(
    //   map(([products:any, filterString]) => products.filter(product => product.region.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    // );
   }

  ngOnInit(): void {
    this.productList=this.service.refreshList();
  }

  selectProduct(item:any){
    this.service.addtoCart(item);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;

  }

}

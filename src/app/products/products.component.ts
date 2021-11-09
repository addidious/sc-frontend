import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductDetails } from '../shared/product-details.model';
import { ProductDetailsService } from '../shared/product-details.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  filter!: FormControl;
  filter$!: Observable<string>;
  formGroup!:FormGroup;
  productList$!:Observable<ProductDetails[]>;
  filteredProducts$!: Observable<ProductDetails[]>;

  filterValue:string;

  constructor(private service: ProductDetailsService) {
    this.formGroup = new FormGroup({filter : new FormControl('')});
   }

  ngOnInit(): void {
    this.productList$ = this.service.refreshList();

    // const ts = this.filter$.subscribe(
    //   (value)=>
    //   {console.log(value);
    // })

    // this.filteredProducts$ = combineLatest(this.filteredProducts$, this.filter$).pipe(
    //   map(([products:any, filterString]) => products.filter(product => product.region.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    // );

    // this.filteredProducts$ = combineLatest([this.filter$,this.filteredProducts$]).pipe(
    //   // map(([filterString,products])=>{products.filter((product: { region: string; })=>{product.region.toLowerCase().indexOf(filterString.toLowerCase())})
    //   map(([filterString,products])=>{return products
    //   }))

    //  this.filteredProducts$.subscribe(x=>{console.log(x)})
  }
  ngOnChanges(){
    this.filter$ = this.formGroup.get('filter')!.valueChanges;

    this.filteredProducts$!.pipe(map(items=>items.filter(item=>item.region!.toLowerCase().indexOf(this.filterValue)>-1)));
  }

  selectProduct(item:any){
    this.service.addtoCart(item);
  }

  applyFilter(event: Event){
    console.log(event);
    this.filterValue = (event.target as HTMLInputElement).value;
    // this.productList.filter(x=>{x.region?.toLocaleLowerCase().includes(filterValue.toLowerCase())})
  }

}

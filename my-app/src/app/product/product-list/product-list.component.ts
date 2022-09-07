import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()products : any = [];
  @Input()filterProduct : any =[];
  // @Input()searchText : any;
  constructor() { }
  remove(productid : number) : void{
    alert (" You want remove product" + productid);
    const index = this.products.findIndex((product: { id: number; }) => product.id === productid);
    if(index !== -1){
      this.products.splice(index,1)
    }
  }
  ngOnInit(): void {
  }

}

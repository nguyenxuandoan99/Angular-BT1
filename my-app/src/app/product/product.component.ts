import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private router: Router) { }
  searchText : string = "";

  // filterProduct : Product[] = [];

  filterProduct: Product[] = [];
    update(){
      this.router.navigate(['/update']);
    }
    remove(productid : number) : void{
      alert (" You want remove product" + productid);
      const index = this.filterProduct.findIndex((product: { id: number; }) => product.id === productid);
      if(index !== -1){
        this.filterProduct.splice(index,1)
      }
    }
    searchProduct(searchvalueproduct : string){
      this.searchText = searchvalueproduct;
      this.filterProduct = this.filterProduct.filter(product => product.name.includes(this.searchText))
      console.log(this.searchText)
    }
  ngOnInit(): void {
    this.filterProduct = [
      {
        id : 1,
        name : 'Iphone Xs',
        price : 500000,
        img : 'https://product.hstatic.net/1000080424/product/636767481293463872_iphone-xs-gold-4_b5f892da204e4205ae73434b3db1f80d.png',
      },

      {
        id : 2,
        name : 'Samsung',
        price : 600000,
        img : 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-xam-600x600-200x200.jpg',

      },

      {
        id : 3,
        name : 'Oppo',
        price : 450000,
        img : 'https://rukminim1.flixcart.com/image/416/416/jrp8r680/cases-covers/back-cover/h/q/d/noble-nz-opo-f7-tran-01-original-imaf6ghkemmmmnmh.jpeg?q=70',
      },
    ]
  }
}

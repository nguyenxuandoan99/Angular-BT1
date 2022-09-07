import { Component } from '@angular/core';
import { Product } from './product/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "my-app";
    //   products : Product[] = [
    //   {
    //     id : 1,
    //     name : 'Iphone Xs',
    //     price : 500000,
    //     img : 'https://product.hstatic.net/1000080424/product/636767481293463872_iphone-xs-gold-4_b5f892da204e4205ae73434b3db1f80d.png',
    //   },

    //   {
    //     id : 2,
    //     name : 'Samsung',
    //     price : 600000,
    //     img : 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-xam-600x600-200x200.jpg',

    //   },

    //   {
    //     id : 3,
    //     name : 'Oppo',
    //     price : 450000,
    //     img : 'https://rukminim1.flixcart.com/image/416/416/jrp8r680/cases-covers/back-cover/h/q/d/noble-nz-opo-f7-tran-01-original-imaf6ghkemmmmnmh.jpeg?q=70',
    //   },
    // ]
}

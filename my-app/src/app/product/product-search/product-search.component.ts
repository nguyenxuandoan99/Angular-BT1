import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor() { }

  searchValue : string = '' ;
  @Input() products : any;
  @Output() searchtextChange : EventEmitter<string> = new EventEmitter<string>();

  searchProduct(){
    this.searchtextChange.emit(this.searchValue)
  }

  ngOnInit(): void {
  }

}

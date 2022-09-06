import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router) { }
  searchValue : string = '' ;
  @Output() searchtextChange : EventEmitter<string> = new EventEmitter<string>();

  searchProduct(){
    this.searchtextChange.emit(this.searchValue)
  }
  ngOnInit(): void {
  }

}

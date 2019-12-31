import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
  public isShow:boolean =false;
  public username:string ='xuanba';
  public isChecked:boolean=false;
  public age:number;
  public names:string[]=['TPHCM','Ha Noi','vinh long'];
  public LoadDatamore:string[]=['TPHCM','Ha Noi','vinh long','Da nang','bionh duong'];
  public products :any[]=[
     
     
  ]
  public ProductFromServer :any[]=[
    {
      id:1,
      name:"iphone11",
      image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png'
    },
    {
      id:2,
      name:"iphone 6",
      image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png'
    },
    {
      id:3,
      name:"iphone 8",
      image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png'
    },
    {
      id:4,
      name:"samsung",
      image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png'
    },
    {
      id:5,
      name:"iphone11",
      image:'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  ontoggle(){
    this.isShow = !this.isShow;
  }
  onChange(value){
    this.isChecked= value;
  }
  myTrack(index, item){
    return item.id;
  }
  onLoadData(){
   this.products= this.ProductFromServer; //day la cai nhan nhơ
  }

}

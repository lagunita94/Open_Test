import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() desc:string = '';
  @Input() title:string = '';
  @Input() imageSrc:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

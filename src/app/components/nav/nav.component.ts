import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges, AfterViewInit{
  @Input() isScroll:boolean = false;
  @ViewChild('nav') nav:any;
  constructor(private renderer:Renderer2) { 
    
  }
  ngAfterViewInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.isScroll.currentValue && this.nav &&  this.nav.nativeElement){
      this.renderer.addClass(this.nav.nativeElement,'scroll');
    }else if(this.nav && this.nav.nativeElement) {
      this.renderer.removeClass(this.nav.nativeElement,'scroll')
    }
  }

  ngOnInit(): void {

  }
}

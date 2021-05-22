import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'open-test';
  features:any[] = [
    {
      title:'Quick cash disbursement',
      desc:'Get terms loans that your business needs within 72 hrs',
      imageSrc:'assets/Get Paid Instantly.png'
    },
    {
      title:'Ace your business finances',
      desc:'Manage banking, accounting & everything in between, on one platform',
      imageSrc:'assets/freelancer_feature_icon_6@1.5x.png'
    },
    {
      title:'Low-interest rate',
      desc:'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      imageSrc:'assets/Low interest rate.png'
    },
    {
      title:'Loans to fight COVID-19',
      desc:'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      imageSrc:'assets/Covid.png'
    },
    {
      title:'Zero Paperwork',
      desc:'Get started instantly by submitting only your basic details & bank statements',
      imageSrc:'assets/Secure Payments.png'
    }
  ]
  @ViewChild('scroll') scroll:any;
  listener:any;
  isScroll:boolean = false;
  constructor(private renderer: Renderer2){
    
  }
  ngOnDestroy(): void {
    this.listener()
  }
  ngAfterViewInit(): void {
    this.listener = this.renderer.listen(this.scroll.nativeElement, 'scroll', (e) => {
      if(e.target.scrollTop > 64){
        this.isScroll = true;
      }else this.isScroll = false;
    });
  }

}

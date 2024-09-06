import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
})
export class CustomDirective {

  @Input("appCustom") color = {bgColor: 'red', fontColor: 'white'};
  
  constructor(private MyRef: ElementRef) {
    console.log(MyRef);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.MyRef.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.MyRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('click')
  onClick() {
    this.MyRef.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('dblclick')
  onDoubleClick() {
    this.MyRef.nativeElement.style.backgroundColor = 'yellow';
  }
}

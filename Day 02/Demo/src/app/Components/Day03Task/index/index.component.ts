import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnChanges {

  @Input() Student :any;
  Students: { name: string; age: number }[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Student"].firstChange ===false){
      this.Students.push(this.Student);
    }
  }
}

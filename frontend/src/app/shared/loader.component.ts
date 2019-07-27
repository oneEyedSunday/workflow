import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template:  `
    <div>
      <span [attr.style]="style | sanitizeStyle">
        <i class="fa fa-spin fa-spinner"></i>
      </span>
    </div>
  `
})
export class LoaderComponent implements OnInit {
  @Input() size = 1;
  style: string;

  ngOnInit() {
    this.style = `font-size: ${this.size}em`;
  }
}


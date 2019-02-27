import { Directive, Input, ElementRef, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective implements OnChanges {
  @Input('appPlaceholder') countryCode: string;
  constructor(private element: ElementRef, private translateService: TranslateService) { }
  ngOnChanges() {
    this.insertPlaceholder(this.translateService.instant('PHONE_NUMBER'))
  }
  insertPlaceholder(phone) {
    switch (this.countryCode) {
      case 'DZ':
        this.element.nativeElement.placeholder = "Phone No. (+213 xxx xxx xxx)";
        break;
      case 'BH':
        this.element.nativeElement.placeholder = "Phone No. (+973 xxx xxx xxx)";
        break;
      case 'IN':
        this.element.nativeElement.placeholder = "Phone No. (+91 xxx xxx xxxx)";
        break;
      default:
        this.element.nativeElement.placeholder = phone;
        break;
    }
  }
}

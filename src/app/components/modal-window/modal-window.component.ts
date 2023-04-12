import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindowComponent implements OnChanges {
  @ViewChild('modalHtml') modalHtml!: ElementRef;

  @Input() isOpen!: boolean;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['isOpen'].firstChange) {
      if (changes['isOpen'] && changes['isOpen'].currentValue) {
        this.modalHtml.nativeElement.show();
      } else {
        this.modalHtml.nativeElement.close();
      }
    }
  }
}

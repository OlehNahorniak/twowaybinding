import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {


  @Input('parentData') public  parentData:any;
  @Output() public childEvent = new EventEmitter();

  fireEvent(value:any){
    this.childEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cardcountry',
  templateUrl: './cardcountry.component.html',
  styleUrls: ['./cardcountry.component.scss']
})
export class CardcountryComponent implements OnInit {

  @Input() public country : any;

  constructor() { }

  ngOnInit(): void {}
}

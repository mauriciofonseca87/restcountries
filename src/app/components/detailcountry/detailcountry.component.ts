import { Component, HostBinding, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

class Border {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-detailcountry',
  templateUrl: './detailcountry.component.html',
  styleUrls: ['./detailcountry.component.scss']
})
export class DetailcountryComponent implements OnInit {

  @HostBinding('class') componentCssClass : any;
  public country : any;

  @Input() public Listcountries;
  @Input() public set countryDetail(countryDetail: any) {
    countryDetail.currentCurrencies = countryDetail.currencies.map(e => e.name).join(",");
    countryDetail.currentLanguages = countryDetail.languages.map(e => e.name).join(",");
    this.country = countryDetail;
}
  @Output() close: EventEmitter<any> = new EventEmitter();

  faLongArrowAltLeft = faLongArrowAltLeft;

  constructor(public overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    this.loadBorders();  
  }

  loadBorders()
  {
    const self = this;
    if (this.Listcountries)
    {
      self.country.currentBorders = []
      this.country.borders.forEach(itemBorder => {
        let newBorder = new Border;
        newBorder.value = itemBorder;
        newBorder.viewValue = self.Listcountries.find(b => b.alpha3Code == itemBorder).name;
        self.country.currentBorders.push(newBorder);
      });
    }
  }

  onClickBorder(border)
  {
    let getBorder = this.Listcountries.find(b => b.alpha3Code == border.value);
    if (getBorder)
    {
        this.countryDetail = getBorder;
        this.loadBorders();
    }
  }

  public onClose()
  {
    this.close.emit();
  }
}

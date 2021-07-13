import { Component, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { faMoon, faSun, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CountriesservicesService } from './services/countriesservices.service';
import { regions } from './services/countriesmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') componentCssClass : any;
  @ViewChild('inputSearch', {static: false}) inputSearch : ElementRef;
  faMoon = faMoon;
  faSun = faSun;
  faSearch = faSearch;
  public LightTheme = true;
  public listCountries : any;
  public listCountriesAux : any;
  public countryselected : any;
  public filterWord : any
  public regions = regions;
  
  constructor(public overlayContainer: OverlayContainer, 
              private apiCountries: CountriesservicesService){}

  ngOnInit() {
    this.getAllCountries();
  }

  ngOnDestroy() {
    this.clearControls();
  }

  getAllCountries()
  {
    this.apiCountries.GetAllCountries()
      .subscribe(data => {
        this.listCountries = data;
        this.listCountriesAux = data;
      }, error => {
        console.log(error);
        this.listCountries = [];
        this.listCountries = [];
      });
  }

  public onSetTheme(theme : string){
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    this.LightTheme = !this.LightTheme;
  }

  public onSelectCountry(country : any)
  {
    this.countryselected = country;
  }

  public onSelectRegion(region : any)
  {
    this.clearControls();

    if (region === 'all')
    {
      this.getAllCountries()
    }
    else
    {
      this.apiCountries.GetCountriesByRegion(region)
        .subscribe(data => {
          this.listCountries = data;
          this.listCountriesAux = data;
        }), error => {
          console.log(error);
          this.listCountries = [];
          this.listCountries = [];
        };
    }
  }

  private clearControls(){
    if (this.inputSearch)
      this.inputSearch.nativeElement.value = "";
    this.listCountries = undefined;
  }

  public handleFilter(value) {
    this.filterWord = value;
    this.listCountries = this.listCountriesAux.filter((s) => s.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  public closeDetail()
  {
    this.countryselected = undefined;
    this.clearControls();
    this.getAllCountries();
  }
}

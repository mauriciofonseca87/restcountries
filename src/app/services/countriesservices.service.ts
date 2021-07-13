import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesservicesService {

  private APICoutries = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  public GetAllCountries()
  {
    let complementURL = 'all'
    return this.http.get(this.APICoutries + complementURL);
  }

  public GetCountriesByRegion(region)
  {
    let complementURL = 'region/';
    return this.http.get(this.APICoutries + complementURL + region);
  }
}

import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoServiceService {
  public trendingResult: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTrending(): Observable<any> {
    return this.httpClient.get('https://api.coingecko.com/api/v3/search/trending');
  }

  public getCoinInfo(id: string): Observable<any> {
    return this.httpClient.get('https://api.coingecko.com/api/v3/coins/' + id);
  }
}

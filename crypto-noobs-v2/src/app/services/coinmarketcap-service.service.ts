import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoinmarketcapServiceService {
  public apiKey: string = 'fffd5874-8f26-48a2-8712-7a1fa9382aba';
  public baseUrl: string = 'https://pro-api.coinmarketcap.com';
  public globalMetricsEndpoint: string = '/v1/global-metrics/quotes/latest';
  public latestEndpoint: string =
    '/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD';
  public metadataEndpoint: string = '/v2/cryptocurrency/info?symbol=DXCHECK';

  public options: Object = {
    headers: {
      'X-CMC_PRO_API_KEY': this.apiKey,
    },
  };

  constructor(private httpClient: HttpClient) {}

  public getCoinInfo(): Observable<any> {
    return this.httpClient.get(
      // this.baseUrl + this.latestEndpoint + '?CMC_PRO_API_KEY=' + this.apiKey
      this.baseUrl + this.metadataEndpoint, this.options
      );
  }
}

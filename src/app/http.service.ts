import { Injectable } from "@angular/core";
// 1-import
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  //2-inject

  constructor(public httpClient: HttpClient) {}

  //3
  getapiPlaces() {
    return this.httpClient.get(
      "https://wanmuz-rest-api-2019.herokuapp.com/api/places"
    );
  }
}

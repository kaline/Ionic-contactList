import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(public http: HttpClient) { }

  searchAddressforCEP(cep){
    return this.http.get('https://viacep.com.br/ws/' + cep + '/json');

  }
}

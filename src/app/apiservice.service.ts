import { Injectable } from '@angular/core';
import { Http, Headers, Response,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiserviceService {

  constructor(private http: Http) { }

  getJson(data){
      return this.http.get(data)
        .map((res: Response) =>{
                if(res.status === 200){
                    return res;
                }else{
                    return res;
                }
            });
    }

}

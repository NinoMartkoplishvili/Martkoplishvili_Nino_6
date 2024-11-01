import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  Log(data:any){
    console.log(data)
  }

  constructor() { }
}

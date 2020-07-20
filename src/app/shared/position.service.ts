import { Injectable } from '@angular/core';
import { Position } from './position.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PositionService {

  positionForm: Position;
  positionList: Position[];
  private readonly rootUrl = "https://localhost:44354/api";
  
  constructor(private http: HttpClient) { }

  postPosition(formData: Position) {
    return this.http.post(this.rootUrl + '/Position', formData);
  }

  getAllPositions() {
    return this.http.get<Position[]>(this.rootUrl + '/Position')
      .pipe(tap((data) => 
          this.positionList = data)
      );
  }
}

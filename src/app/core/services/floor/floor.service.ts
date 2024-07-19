import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FLOOR_URL } from '../../../shared/constants/url';
import { Floor, FloorDTO } from '../../models/floor.interface';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class FloorService {
  constructor(private apiService: ApiService, private router: Router) {}

  getFloors(): Observable<Floor[]> {
    return this.apiService.getAll<Floor[]>(FLOOR_URL);
  }

  getFloorById(id: string): Observable<Floor> {
    return this.apiService.getOne<Floor>(FLOOR_URL, id);
  }

  submitFloor(floorData: FloorDTO): Observable<FloorDTO> {
    return this.apiService.add<FloorDTO>(FLOOR_URL, floorData);
  }

  updateFloor(id: string, floorData: Partial<FloorDTO>): Observable<FloorDTO> {
    return this.apiService.update<FloorDTO>(FLOOR_URL, id, floorData);
  }

  deleteFloor(id: string): Observable<Floor> {
    return this.apiService.delete<Floor>(FLOOR_URL, id);
  }
}

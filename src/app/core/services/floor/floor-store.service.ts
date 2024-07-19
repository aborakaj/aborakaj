import { Injectable } from '@angular/core';
import { FloorService } from './floor.service';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Floor, FloorDTO } from '../../models/floor.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FloorStoreService {
  private floorsSubject = new BehaviorSubject<Floor[]>([]);
  private floorErrors = new BehaviorSubject<string | null>(null);

  public floorErrors$ = this.floorErrors.asObservable();
  public floors$: Observable<Floor[]> = this.floorsSubject.asObservable();

  constructor(
    private readonly floorService: FloorService,
  ) {
    this.getFloors();
  }

  addFloor(floor: FloorDTO) {
    this.floorService
      .submitFloor(floor)
      .pipe(take(1))
      .subscribe({
        next: (_floor: FloorDTO) => {
          this.getFloors();
        },
        error: (err) => this.floorErrors.next(err),
      });
  }

  deleteFloor(floorId: string) {
    this.floorService
      .deleteFloor(floorId)
      .pipe(take(1))
      .subscribe({
        next: (_floor: Floor) => this.getFloors(),
        error: (err) => this.floorErrors.next(err),
      });
  }

  getFloorById(floorId: string): Floor | undefined {
    return this.floorsSubject
      .getValue()
      .find((floor: Floor) => floor.id === floorId);
  }

  updateFloor(
    floorId: string,
    floorData: Partial<FloorDTO>
  ) {
    this.floorService
      .updateFloor(floorId, floorData)
      .pipe(take(1))
      .subscribe({
        next: (_floor: FloorDTO) => {
          this.getFloors();
        },
        error: (err: Error) => this.floorErrors.next(err.message),
      });
  }

  private getFloors() {
    this.floorService
      .getFloors()
      .pipe(take(1))
      .subscribe({
        next: (floors: Floor[]) =>
          this.floorsSubject.next(floors),
        error: (err) => this.floorErrors.next(err.message),
      });
  }
}

import { Injectable } from '@angular/core';
import { Process } from '@shared/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  fetchProcesses(): Observable<Process[]> {
    return of([
      new Process(), new Process(), new Process()
    ]);
  }

  getProcessById(id: number | string): Observable<Process> {
    return of(new Process());
  }
}

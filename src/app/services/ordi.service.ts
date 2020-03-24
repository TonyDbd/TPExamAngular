import {catchError, retry} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { Ordi } from '../models/ordi';

@Injectable({
  providedIn: 'root'
})
export class OrdiService {
  ordi: Ordi[] = [];
  marqueDispo = ['Dell', 'HP', 'Apple', 'Asus'];
  typeDispo = ['Portable', 'Fixe', 'Tablette hybride'];
  categorieDispo = ['Gaming', 'Bureautique', 'Premier prix'];
  urlApi = 'http://localhost:3000/ordi';
  constructor(private httpClient: HttpClient, ) {
   }


  add(ordi: Ordi): Observable<Ordi> {
    ordi.date = new Date();
    return this.httpClient.post<Ordi>(this.urlApi, ordi).pipe(
       retry(1), 
       catchError(this.handleError)
       );
  }

  getAll(): Observable<Ordi[]> {
    return this.httpClient.get<Ordi[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    );  console.log(this.getAll());
  }

  getOneById(id: number): Observable<Ordi> {
    return this.httpClient.get<Ordi>(this.urlApi + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  remove(ordi: Ordi): Observable<Ordi> {
    return this.httpClient.delete<Ordi>(this.urlApi + '/' + ordi.id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editOrdi(ordi: Ordi): Observable<Ordi> {
    return this.httpClient.put<Ordi>(this.urlApi + '/' + ordi.id, ordi).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }





  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}

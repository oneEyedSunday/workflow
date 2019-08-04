import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;


/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
  constructor(private toastr: ToastrService) {
  }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
  (operation = 'operation', result = null as T) => this.handleError(serviceName, operation, result)

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (e: HttpErrorResponse): Observable<T> => {
      let message: string;

      // Error throw logic based on API structure
      switch (true) {
        // TODO (oneeyedsunday) - hanlde 401, 403 and 404
        case e.error instanceof ProgressEvent: {
          message = 'Server Unavailable';
          break;
        }

        case e.status === 422 && e.error.body.isJoi: {
          message = e.error.body.details[0].message;
          break;
        }

        case (typeof e.error.body === 'string'): {
          message = e.error.body;
          break;
        }

        case (typeof e.error.message === 'string'): {
          message = e.error.message;
          break;
        }

        default: {
          message = e.message;
        }
      }


      // Throw an Error Toast
      this.toastr.error(message, operation);


      // Let the app keep running by returning a safe result when its okay
      return result === null ? throwError(e) : of(result);
    };

  }
}


export const LogError = error => console.error(error);

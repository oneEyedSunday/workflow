import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Document } from '@shared/interfaces';


@Injectable()
export class DocumentService {
    fetchDocuments(): Observable<Document[]> {
        return of([]);
    }

    getDocumentById(identifier: number | string): Observable<Document> {
        return of (new Document());
    }
}

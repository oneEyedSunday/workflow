import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of, Observable, throwError, iif } from 'rxjs';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { DocumentService } from '../services';
import { Document } from '@shared/interfaces';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders, FileItem } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';


interface CloudinaryUploadResponse {
  bytes: number;
  created_at: string;
  etag: string;
  format: string;
  original_filename: string;
  pages?: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature?: string;
  tags: string[];
  type: string;
  url: string;
}

interface CLoudinaryFileItem {
  data: CloudinaryUploadResponse;
  file: FileItem;
}

@Component({
    selector: 'app-documents-create-update',
    templateUrl: './create-update.component.html'
})
export class CreateUpdateComponent implements OnInit {
  editing: boolean;
  document: Document;
  submitting: boolean;
  file: File;
  public uploader: FileUploader;
  private hasBaseDropZoneOver: boolean;
  responses: any[] = [];

  constructor(
    private _actRoute: ActivatedRoute,
    private _router: Router,
    private _docSvc: DocumentService,
    private cloudinary: Cloudinary,
    private zone: NgZone
  ) { }

  get uploadInProgress(): boolean {
    return this.responses.some(r => !r.status);
  }

  ngOnInit() {
    this.setUpCloudinaryUploader();
    this._actRoute.data.pipe(
      switchMap((data: { edit: boolean }) => {
        this.editing = !!data.edit;
        return iif(
          () => this.editing,
          this.getDocument(),
          of(new Document())
        );
      }),
      tap(doc => this.document = doc),
      catchError(err => this.handleError(err))
    ).subscribe();
  }

  getDocument(): Observable<Document> {
    return this._actRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (isNaN(+params.get('documentId'))) {
          throw new Error('Invalid document identifier');
        } else {
          return this._docSvc.getDocumentById(+params.get('documentId'));
        }
      })
    );
  }

  handleError(err: any) {
    // show error in UI
    // TODO (oneeyedsunday) move this to shared since its similar
    return throwError(err);
  }

  onSubmit() {
    if (this.submitting) {
      return;
    }
    this.submitting = true;
    const data: CLoudinaryFileItem = this.responses[this.responses.length - 1];
    this.document.link = data.data.secure_url || data.data.url;
    this.editing ? this.updateDocument() : this.createDocument();
  }

  createDocument() {
    this._docSvc.addDocument(this.document)
      .subscribe((res) => {
        // use toast service here
        // url of file and name?
        this._router.navigate(['/documents']); // remove this? and just reste form
      },
      () => this.submitting = false);
  }

  updateDocument() {
  }

  setUpCloudinaryUploader() {
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    };

    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);

      // Add file to upload
      form.append('file', fileItem);
      form.append('tags', 'document');

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      return { fileItem, form };
    };

    const upsertResponse = fileItem => {

      // Run the update in a custom zone since for some reason change detection isn't performed
      // as part of the XHR request to upload the files.
      // Running in a custom zone forces change detection
      this.zone.run(() => {
        // Update an existing entry if it's upload hasn't completed yet

        // Find the id of an existing item
        const existingId = this.responses.reduce((prev, current, index) => {
          if (current.file.name === fileItem.file.name && !current.status) {
            return index;
          }
          return prev;
        }, -1);
        if (existingId > -1) {
          // Update existing item with new data
          this.responses[existingId] = Object.assign(this.responses[existingId], fileItem);
        } else {
          // Create new response
          this.responses.push(fileItem);
        }
      });
    };

    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) => {
      return upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }
      );
    };

    this.uploader.onProgressItem = (fileItem: any, progress: any) =>
      upsertResponse(
        {
          file: fileItem.file,
          progress,
          data: {}
        }
      );
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}

interface IDocument {
  documentId: number;
  name: string;
  url: string;
}

export class Document implements IDocument {
  documentId;
  name;
  url;
  constructor() {
    this.name = 'New Document';
  }
}


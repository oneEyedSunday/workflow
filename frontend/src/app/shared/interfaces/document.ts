interface IDocument {
  documentId: number;
  name: string;
  url: string;
}

export class Document implements IDocument {
  documentId: number;
  name: string;
  url: string;
  constructor() {
    this.name = '';
  }
}


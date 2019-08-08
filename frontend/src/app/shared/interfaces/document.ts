interface IDocument {
  id: number;
  filename: string;
  link: string;
  description: string;
}

export class Document implements IDocument {
  id: number;
  filename: string;
  link: string;
  description: string;
  constructor() {
    this.filename = '';
  }
}


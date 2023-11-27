

export class Blog {
  _id?: number;
  content: string;
  document: string;
  description: string

  constructor(content: string, document: string, description: string){
      this.content = content;
      this.document = document;
      this.description = description;
  }
}

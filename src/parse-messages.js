export class ParseMessage {
  constructor(text) {
    this.text = text;
  }
}

export class ParseSuccessMessage extends ParseMessage {
  type = 'success';
}

export class ParseErrorMessage extends ParseMessage {
  type = 'error';
}
